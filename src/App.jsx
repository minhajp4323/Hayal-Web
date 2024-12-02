import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CountryPage from "./Pages/Country/CountryPage"
function App() {
  return (
    <div className="font-mulish bg-[#DFFBFF]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/country/:id" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
