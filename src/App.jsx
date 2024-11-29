import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="font-mulish bg-[#DFFBFF]  pt-[60px] ">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
