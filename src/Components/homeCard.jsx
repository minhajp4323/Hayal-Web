import { useState } from "react";

function HomeCard() {
  const contents = [
    "Discover the magic of Thailand with our tailor-made travel experiences.",
    "Explore the breathtaking beaches and vibrant culture of Bali.",
    "Experience the adventure and serenity of the Himalayas.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === contents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const commonColor = "#333";

  return (
    <div>
      <div className="mt-6">
        <div
          className="relative flex flex-col gap-4 bg-white rounded-[20px] text-black p-4 sm:p-6 lg:p-10 max-w-sm w-[400px] h-auto mt-[66px]"
          style={{
            clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%, 0% 35%)",
            borderRadius: "20px",
          }}
        >
          <div className="flex justify-end gap-4">
            <button
              onClick={handlePrev}
              className="border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              style={{ borderColor: commonColor, color: commonColor }}
            >
              &#8592; 
            </button>
            <button
              onClick={handleNext}
              className="border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              style={{ borderColor: commonColor, color: commonColor }}
            >
              &#8594; 
            </button>
          </div>

          <div className="relative mt-[25px] h-[100px] overflow-hidden">
            {" "}
            {contents.map((text, index) => (
              <p
                key={index}
                className="text-2xl transition-opacity duration-300 ease-in-out absolute "
                style={{
                  opacity: currentIndex === index ? 1 : 0,
                  transform: `translateY(${
                    currentIndex === index ? "0" : "20px"
                  })`,
                  transition:
                    "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                }}
              >
                {text}
              </p>
            ))}
          </div>

          <div className="flex items-center mt-4">
            {contents.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-0"
                style={{
                  borderBottom: `2px solid ${
                    index === currentIndex ? "black" : "#E8E8E8"
                  }`,
                  width: index === currentIndex ? "100%" : "0%", 
                  transition:
                    "width 0.3s ease-in-out, border-color 0.3s ease-in-out", 
                }}
              ></div>
            ))}
          </div>

          <div className="flex justify-between text-sm sm:text-base mt-4">
            <p>(ENQUIRE)</p>
            <p>{`0${currentIndex + 1}/0${contents.length}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
