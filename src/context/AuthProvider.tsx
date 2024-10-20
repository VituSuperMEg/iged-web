import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuth";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }else{
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return <>{children}</>;
}
