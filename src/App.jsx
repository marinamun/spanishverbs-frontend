import "./App.css";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      {/*     Create all routes   */}

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
