import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { type Theater } from '../Models/Theater';
import { type Showing } from '../Models/Showing';
import './PickSeats.css';
import { getAsync } from '../services/ApiService';

export const Route = createFileRoute('/pick-seats/$showingId')({
  component: PickSeats,
})

function PickSeats() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate({ to: '/Checkout' });
    }

    const { showingId } = Route.useParams()

    const { data, isPending, error } = useQuery({
        queryKey: ['reservations'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3008/reservations'); 
            if (!response.ok) {
                throw new Error('Reservations response was not ok');
            }

            return response.json();
        }
    });

    const {data: showingsData, isPending: isShowingsPending, error: showingsError } = useQuery({
        queryKey: ['showings', showingId],
        queryFn: async () => {
            return getAsync(`http://localhost:3008/showings/${showingId}`);
        }
    });

    const {data: theaterData, isPending: isTheaterPending, error: theaterError } = useQuery({
        queryKey: ['theaters', (showingsData as Showing)?.theater_id],
        queryFn: async () => {
            return getAsync(`http://localhost:3008/theaters/${(showingsData as Showing)?.theater_id}`);
        },
        enabled: !!showingsData
    });
    
    if (isPending || isShowingsPending) return 'Loading...';

    if(showingsError) return 'An error has occurred: ' + showingsError.message;
    
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className='pickSeatsContainer'>
            <div className='header'>
                Watching {showingId}
            </div>
            <div className='tableContainer'>
                {(theaterData as Theater)?.tables?.map(table => (
                    <div className="table" key={table.id}>
                        <h3>{table.id}</h3>
                        <div className="seatContainer">
                            {table.seats?.map(seat => (
                                <div className="seat" key={seat.id}>
                                    <h4>{seat.seat_number}</h4></div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='checkout-btn'>
                <button onClick={handleClick}>Checkout</button>
            </div>
        </div>
    );
}