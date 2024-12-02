import { useState } from "react";

import Workspace from "../../assets/About/Workspace.jpg";
import Parties from "../../assets/About/Parties.jpg";
import Sports from "../../assets/About/Sports.jpg";
import Trips from "../../assets/About/Trips.jpg";
import Events from "../../assets/About/Events.jpg";
import Festivals from "../../assets/About/Festivals.jpg";
import Footer from "../Footer";

function InsideHayal() {
  const images = [
    { src: Workspace, title: "Workspace", description: "Collaborative Spaces" },
    { src: Parties, title: "Parties", description: "Social Gatherings" },
    { src: Sports, title: "Sports", description: "Active Lifestyle" },
    { src: Trips, title: "Trips", description: "Adventurous Journeys" },
    { src: Events, title: "Events", description: "Memorable Moments" },
    {
      src: Festivals,
      title: "Festivals",
      description: "Cultural Celebrations",
    },
  ];

  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleNextClick = () => {
    setFocusedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    setFocusedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <div className="mx-24">
        <div className="w-full flex items-center justify-between">
          <div>
            <div className="text-[50px] font">Inside Hayal :</div>
            <p className="text-xl text-black">A Glimpse Into Our World</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handlePrevClick}
              className="border-2 border-black px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center hover:bg-gray-100 hover:bg-opacity-35 transition-all"
            >
              &#8592;
            </button>
            <button
              onClick={handleNextClick}
              className="border-2 border-black px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center hover:bg-gray-100 hover:bg-opacity-35 transition-all"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="mx-24 flex gap-4 justify-center mt-6 overflow-hidden rounded-[20px]">
        {images.map((image, index) => {
          const isFocused = index === focusedIndex;
          const baseWidth = 160;
          const focusedWidth = 441;

          return (
            <div
              key={index}
              className="h-[635px] flex-shrink-0 relative transition-all duration-300 ease-in-out"
              style={{
                width: isFocused ? `${focusedWidth}px` : `${baseWidth}px`,
              }}
            >
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#4DBFCC] to-transparent rounded-[20px] opacity-35"
                  style={{
                    zIndex: 1,
                  }}
                />
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    zIndex: 2,
                  }}
                  className={`w-full h-full object-cover rounded-[20px] transition-all duration-300 ease-in-out ${
                    isFocused ? "shadow-lg" : "opacity-90"
                  }`}
                />
                <div className="absolute bottom-10 -left-12 p-8 bg-opacity-30 rounded-[20px] flex items-end justify-start -rotate-90">
                  <h3 className="text-[35px] font-bold text-white leading text-left">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default InsideHayal;
