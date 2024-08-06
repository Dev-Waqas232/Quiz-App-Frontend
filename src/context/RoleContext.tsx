import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { useAuth } from "./AuthContext";

type RoleContextType = {
  role: "teacher" | "student" | null;
  permissions: string[];
  hasPermission: (permission: string) => boolean;
  setRole: (role: "teacher" | "student") => void;
};

type RoleProviderProps = {
  children: ReactNode;
};

const RoleContext = createContext({} as RoleContextType);

export function useRole() {
  return useContext(RoleContext);
}

export function RoleProvider({ children }: RoleProviderProps) {
  const [role, setRoleState] = useState<"teacher" | "student" | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);
  const { isAuthenticated } = useAuth();

  function setRole(role: "teacher" | "student") {
    setRoleState(role);

    switch (role) {
      case "teacher":
        setPermissions(["teacherDashboard", "createQuiz"]);
        break;
      case "student":
        setPermissions(["studentDashboard", "takeQuiz"]);
        break;
      default:
        setPermissions([]);
    }
  }

  // Function to check if the user has a specific permission
  function hasPermission(permission: string) {
    return permissions.includes(permission);
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    console.log(user);

    if (user) {
      setRole(user.role);
    }
  }, [isAuthenticated]);

  return (
    <RoleContext.Provider value={{ permissions, role, hasPermission, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}
