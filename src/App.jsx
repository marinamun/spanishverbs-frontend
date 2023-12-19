import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import Vocabulary from "./pages/Vocabulary";

function App() {
  return (
    <>
      {/*     Create all routes   */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
      </Routes>
    </>
  );
}

export default App;
