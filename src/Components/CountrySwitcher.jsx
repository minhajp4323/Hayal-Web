import { useState } from "react";

function CountrySwitcher() {
  const [selectedCountry, setSelectedCountry] = useState("IND");

  const handleSwitch = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="flex cursor-pointer bg-[#F8F8F8] rounded-full p-2">
      <p
        onClick={() => handleSwitch("IND")}
        className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out ${
          selectedCountry === "IND"
            ? "bg-white text-black shadow-sm"
            : "bg-transparent text-gray-600"
        }`}
      >
        IND
      </p>
      <p
        onClick={() => handleSwitch("UAE")}
        className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out ${
          selectedCountry === "UAE"
            ? "bg-white text-black shadow-sm"
            : "bg-transparent text-gray-600"
        }`}
      >
        UAE
      </p>
    </div>
  );
}

export default CountrySwitcher;
