import { create } from 'zustand'
import { type Film } from '../Models/Film';

const useFilmStore = create((set) => ({
  films: [],
  setFilms: (films:Film[]) => set({ films }),
}));

export default useFilmStore;