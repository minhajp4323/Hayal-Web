import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className="font-mulish bg-[#DFFBFF]   ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
