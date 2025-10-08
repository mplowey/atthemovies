import { create } from 'zustand'
import { type Film } from '../Models/Film';

const useFilmStore = create((set) => ({
  films: [],
  setFilms: (films:Film[]) => set({ films }),
  
  selectedDate: 'Mon',
  setSelectedDate: (selectedDate: string) => set({ selectedDate }),
}));

export default useFilmStore;