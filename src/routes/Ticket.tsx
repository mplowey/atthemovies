import { createFileRoute } from '@tanstack/react-router';
import './Ticket.css'

export const Route = createFileRoute('/Ticket')({
  component: Ticket,
  validateSearch: (search: Record<string, unknown>) => ({
    seats: (search.seats as {id: number, price: number}[]) || [],
  }),
})

function Ticket() {
  const { seats } = Route.useSearch();
  const total = seats.reduce((sum, seat) => sum + seat.price, 0);

  return (
    <div className="ticketContainer">
      <h1>Your Ticket</h1>
      <p>Summary of your ticket: ${total.toFixed(2)}</p>
      <div className="seatList">
        {seats.map(seat => (
          <div key={seat.id}>Seat {seat.id} - ${seat.price}</div>
        ))}
      </div>
    </div>
  );
}