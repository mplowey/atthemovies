import { create } from "zustand";
import { type User } from "../Models/User";
import { persist, createJSONStorage } from "zustand/middleware";

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
};

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useUserStore;
