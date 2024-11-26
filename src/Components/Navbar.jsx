import Logo from "../assets/Logo2.svg";
import Home from "../assets/Navbar/Home.svg";
import About from "../assets/Navbar/About.svg";
import Holidays from "../assets/Navbar/Holidays.svg";
import Services from "../assets/Navbar/Services.svg";
import Contact from "../assets/Navbar/Contact.svg";
import CountrySwitcher from "./CountrySwitcher";

function Navbar() {
  return (
    <div className="bg-white rounded-[20px] h-[67px]  flex items-center justify-between px-8 mx-[60px] ">
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
      <div className="flex gap-5 mr-6">
        <div>13:45:03</div>
        {/* <div className="flex cursor-pointer  bg-[#F8F8F8]">
          <p className="border-2 rounded-2xl p-1 px-3">IND</p>
          <p className="border-2 rounded-2xl p-1 px-3">UAE</p>
        </div> */}
        <CountrySwitcher/>
      </div>
    </div>
  );
}

export default Navbar;
