import { jwtDecode } from "jwt-decode";
import { persist } from "zustand/middleware";
import create from "zustand";

export interface User {
  name: string;
  email: string;
  photo: string | null;
  ativo: string;
}
export interface Cliente {
  cliente_id: string;
  database: string;
}
interface DecodedToken {
  username: string;
  email: string;
  ativo: string;
  cliente_id: string;
  cliente: {
    database: string;
  };
}

interface AuthState {
  token: string | null;
  userInfo: User | null;
  clienteInfo: Cliente | null;
  setAuth: (token: string) => void;
  clearAuth: () => void;
  isAuthenticated: boolean;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      userInfo: null,
      clienteInfo: null,
      setAuth: (token: string) => {
        const decoded: DecodedToken = jwtDecode<DecodedToken>(token);
        set({
          token,
          userInfo: {
            name: decoded.username,
            email: decoded.email,
            ativo: decoded.ativo,
            photo: null,
          },
          clienteInfo: {
            cliente_id: decoded.cliente_id,
            database: decoded.cliente.database,
          },
          isAuthenticated: true,
        });
      },

      clearAuth: () =>
        set({ token: null, userInfo: null, isAuthenticated: false }),

      isAuthenticated: false,
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
