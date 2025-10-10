import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { type Seat } from '../Models/Theater';
import './Checkout.css'

export const Route = createFileRoute('/Checkout')({
  component: Checkout,
  validateSearch: (search: Record<string, unknown>) => ({
    seats: (search.seats as {id: number, price: number}[]) || [],
  }),
})

function Checkout() {
  const { seats } = Route.useSearch();
  const navigate = useNavigate();
  const total = seats.reduce((sum, seat) => sum + seat.price, 0);

  const handleBuy = () => {
    navigate({ 
      to: '/Ticket',
      search: { seats }
    });
  };
    return (
        <div className="checkoutContainer">
            <h1>Checkout</h1>
            <p>Here's the stuff in your cart</p>
            <table>
                <thead>
                    <tr>
                        <th>Seat ID</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {seats.map(seat => (
                        <tr key={seat.id}>
                            <td>{seat.id}</td>
                            <td>${seat.price}</td>
                            <td>${seat.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="total">
                <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <button onClick={handleBuy}>Buy</button>
        </div>
    );
}