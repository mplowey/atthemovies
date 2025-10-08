import { create } from 'zustand'

const useDateStore = create((set) => ({
  selectedDate: '',
  setDate: (date:Date) => set({ date }),
  setSelectedDate: (selectedDate: string) => set({ selectedDate }),
}));

export default useDateStore;