import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SoundPlayer from "./pages/SoundPlayer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/soundplayer" element={<SoundPlayer />} />
      </Routes>
    </>
  );
};

export default App;
