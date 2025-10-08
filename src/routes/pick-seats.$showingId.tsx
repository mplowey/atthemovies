import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { type Reservation } from '../Models/Reservation'
import './PickSeats.css';

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
    
    if (isPending) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className='pickSeatsContainer'>
            <div className='header'>
                Showing: {showingId}
            </div>
            <div className='currentReservations'>
                {data.map((reservation:Reservation) => (
                    reservation.id + ", "
                ))}
            </div>
            <div className='seatMap'></div>
            <div className='checkout-btn'>
                <button onClick={handleClick}>Checkout</button>
            </div>
        </div>
    );
}