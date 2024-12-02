import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Maldives from "../../assets/Navbar/Flags/Maldives.png";
// Add all your country flags here

function HolidayNav() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const countries = [
    { id: "maldives", name: "Maldives", flag: Maldives },
    { id: "bali", name: "Bali", flag: "../../assets/Navbar/Flags/Bali.png" },
    { id: "thailand", name: "Thailand", flag: "../../assets/Navbar/Flags/Thailand.png" },
    // Add other countries with unique IDs
  ];

  const handleCountryClick = (id) => {
    navigate(`/country/${id}`);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex gap-2 cursor-pointer" onClick={toggleDropdown}>
        HOLIDAY
      </div>

      {isDropdownVisible && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-md w-[700px] h-96 border border-gray-300 z-10 rounded-xl p-4">
          <div className="text-xs text-[#9C9C9C] ml-4 mb-2">
            Select your Destination
          </div>
          <ul className="grid grid-cols-3 gap-4">
            {countries.map((country) => (
              <li
                key={country.id}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer border rounded-[25px] bg-[#EEEEEE]"
                onClick={() => handleCountryClick(country.id)}
              >
                <img src={country.flag} alt={country.name} className="w-6 h-6 rounded" />
                <span>{country.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HolidayNav;
