import './PickSeats.css';

export const PickSeats = () => {
    return (
        <div className='pickSeatsContainer'>
            <div className='header'>
                Where would you like to sit?
            </div>
            <div className='seatMap'></div>
            <div className='checkout-btn'>
                <button>Checkout</button>
            </div>
        </div>
    );
}