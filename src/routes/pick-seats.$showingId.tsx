import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { type Theater, type Seat } from '../Models/Theater';
import { type Showing } from '../Models/Showing';
import { type Film } from '../Models/Film';
import './PickSeats.css';
import { getAsync } from '../services/ApiService';

export const Route = createFileRoute('/pick-seats/$showingId')({
  component: PickSeats,
})

function PickSeats() {
    const [selectedSeats, setSelectedSeats] = useState<{id: number, price: number}[]>([]);
    const navigate = useNavigate();

    const handleSeatClick = (seat: Seat) => {
        setSelectedSeats(prev => {
            const isSelected = prev.some(s => s.id === seat.id);
            if (isSelected) {
                return prev.filter(s => s.id !== seat.id);
            } else {
                return [...prev, {id: seat.id, price: seat.price}];
            }
        });
    };

    const handleCheckout = () => {
        navigate({ 
            to: '/Checkout',
            search: { seats: selectedSeats }
        });
    };

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

    const {data: filmData, isPending: isFilmPending, error: filmError } = useQuery({
        queryKey: ['films', (showingsData as Showing)?.film_id],
        queryFn: async () => {
            return getAsync(`http://localhost:3008/films/${(showingsData as Showing)?.film_id}`);
        },
        enabled: !!showingsData
    });
    
    if (isPending || isShowingsPending) return 'Loading...';

    if(showingsError) return 'An error has occurred: ' + showingsError.message;
    
    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className='pickSeatsContainer'>
            <div className='header'>
                <h2>Where would you like to sit?</h2>                
            </div>
            <div className="watchingInfo"><h3>Watching {(filmData as Film)?.title} on {new Date((showingsData as Showing)?.showing_time).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {new Date((showingsData as Showing)?.showing_time).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</h3></div>
            <div className='tableContainer'>
                {(theaterData as Theater)?.tables?.map(table => (
                    <div className="table" key={table.id}>
                        <h3>{table.id}</h3>
                        <div className="seatContainer">
                            {table.seats?.map(seat => (
                                <div 
                                    key={seat.id}
                                    className={`seat ${selectedSeats.some(s => s.id === seat.id) ? 'selected' : ''}`}
                                    onClick={() => handleSeatClick(seat)}
                                >
                                    <h4>{seat.seat_number}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='checkout-btn'>
                <button onClick={handleCheckout} disabled={selectedSeats.length === 0}>
                    Checkout ({selectedSeats.length} seats)
                </button>
            </div>
        </div>
    );
}