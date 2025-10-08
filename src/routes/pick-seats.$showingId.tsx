import { createFileRoute, useNavigate } from '@tanstack/react-router';
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
    return (
        <div className='pickSeatsContainer'>
            <div className='header'>
                Showing: {showingId}
            </div>
            <div className='seatMap'></div>
            <div className='checkout-btn'>
                <button onClick={handleClick}>Checkout</button>
            </div>
        </div>
    );
}