import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CountryPage from "./Pages/Country/CountryPage";
import OverView from "./Pages/OverView";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Blog from "./Pages/Blog";
function App() {
  return (
    <div className="font-mulish bg-[#DFFBFF]">
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/country/:id" element={<CountryPage />} />
        <Route path="/overview" element={<OverView />} />
        {/* <Route path="/overview/:id" element={<OverView />} /> */}
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/> } />
        <Route path="/Blog" element={<Blog/> } />
      </Routes>
    </div>
  );
}

export default App;
