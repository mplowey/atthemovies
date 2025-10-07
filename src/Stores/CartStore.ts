import { create } from 'zustand'
import { type Reservation } from '../Models/Reservation';

const useCartStore = create((set) => ({
  reservations: [],
  addReservation: (reservation:Reservation) => set((state: any) =>  [...state.reservations, reservation] ),
  removeReservation: (id: number) => set((state: any) => ({reservations: state.reservations.filter((reservation:Reservation) => reservation.id !== id)}))
}));

export default useCartStore;