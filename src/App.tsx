import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";

const App = () => {
  // TODO Add redirection code for validation

  return (
    <Routes>
      <Route path="/auth/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
