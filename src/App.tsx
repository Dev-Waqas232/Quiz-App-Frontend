import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import ProtectedRoute from "./components/ProtectedRoute";
import TeacherDashboard from "./pages/TeacherDashboard";
import UnAuthorized from "./pages/UnAuthorized";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute permission="teacherDashboard" />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
