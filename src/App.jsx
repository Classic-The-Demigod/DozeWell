import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import WakeUp from "./pages/WakeUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userAuth" element={<Auth />} />
        <Route path="/wake-up" element={<WakeUp />} />
      </Routes>
    </>
  );
};

export default App;
