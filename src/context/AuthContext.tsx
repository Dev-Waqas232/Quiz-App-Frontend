import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContext = {
  isAuthenticated: boolean;
  userId: null | string;
  registerUser: (formData: any, role: "teacher" | "student") => void;
  authenticate: () => void;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  //    Registering User
  async function registerUser(formData: any, role: "teacher" | "student") {
    console.log("first");
    try {
      const response = await axios.post(
        `http://localhost:8000/api/auth/signup?role=${role}`,
        formData
      );
      if (response.data.ok) {
        setIsAuthenticated(true);
        setUserId(response.data.data.newUser._id);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        localStorage.setItem("auth", JSON.stringify(true));
        toast.success("Account created successfully");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  }

  //  Authenticate User
  function authenticate() {
    console.log("Hello");
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (user) {
      setIsAuthenticated(true);
      setUserId(user.newUser._id);
    }
  }

  // Logout User
  function logout() {
    setIsAuthenticated(false);
    setUserId(null);
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  }

  //  Authentication status on app load
  useEffect(() => {
    authenticate();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userId, registerUser, authenticate, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
