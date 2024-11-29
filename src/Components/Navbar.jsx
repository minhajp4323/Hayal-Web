import  { useState, useEffect } from "react";
import Logo from "../assets/Navbar/logo2.svg";
import Home from "../assets/Navbar/Home.svg";
import About from "../assets/Navbar/About.svg";
import Holidays from "../assets/Navbar/Holidays.svg";
import Services from "../assets/Navbar/Services.svg";
import Contact from "../assets/Navbar/Contact.svg";
import CountrySwitcher from "./CountrySwitcher";
import BlogIcon from "../assets/Navbar/Blog.svg";

function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    // Set initial time
    updateTime();

    // Update time every second
    const interval = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-[20px] h-[67px] flex items-center justify-between px-8 mx-[60px]">
      <div className="flex gap-8 justify-between">
        <div>
        <img src={Logo} alt="Company Logo" className="w-32 h-auto" />

        </div>
        <div className="flex gap-8">
          <div className="flex gap-2">
            <img src={Home} alt="" className="h-[20px]" />
            HOME
          </div>
          <div className="flex gap-2">
            <img src={About} alt="" className="h-[20px]" />
            ABOUT
          </div>
          <div className="flex gap-2">
            <img src={Holidays} alt="" className="h-[20px]" />
            HOLIDAY
          </div>
          <div className="flex gap-2">
            <img src={Services} alt="" className="h-[20px]" />
            SERVICES
          </div>
          <div className="flex gap-2">
            <img src={Contact} alt="" className="h-[20px]" />
            CONTACT
          </div>
        </div>
      </div>
      <div className="flex gap-5 mr-6 items-center">
        <div>{currentTime}</div>

        <CountrySwitcher />
        <div className="cursor-pointer bg-[#F8F8F8] rounded-full p-2 px-4">
          <img src={BlogIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
