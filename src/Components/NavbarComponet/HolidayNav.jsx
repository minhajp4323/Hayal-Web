import React, { useState } from 'react';

function HolidayNav() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle dropdown visibility when clicked
  const toggleDropdown = () => {
    setIsDropdownVisible(prevState => !prevState);
  };

  // List of countries for the dropdown
  const countries = ["USA", "Canada", "Mexico", "UK", "Germany", "Australia"];

  return (
    <div className="relative">
      <div
        className="flex gap-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        HOLIDAY
      </div>

      {/* Dropdown */}
      {isDropdownVisible && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-48 border border-gray-300 z-10">
          <ul>
            {countries.map((country, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HolidayNav;
