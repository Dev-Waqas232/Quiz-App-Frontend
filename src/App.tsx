import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const App = () => {
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
