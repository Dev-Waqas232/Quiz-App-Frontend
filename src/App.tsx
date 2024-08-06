import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";

const App = () => {
  // TODO Add redirection code for validation
  const { authenticate } = useAuth();

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
