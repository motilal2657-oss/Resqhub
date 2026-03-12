import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  role: "user" | "organization" | null;
  login: (role: "user" | "organization") => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  role: null,
  login: (role) => set({ isLoggedIn: true, role }),
  logout: () => set({ isLoggedIn: false, role: null }),
}));
