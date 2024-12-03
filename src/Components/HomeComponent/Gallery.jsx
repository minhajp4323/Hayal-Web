import { useState } from "react";
import Gallery1 from "../../assets/Home/Gallery/Gallery1.png";
import Gallery2 from "../../assets/Home/Gallery/Gallery2.png";
import Gallery3 from "../../assets/Home/Gallery/Gallery3.png";
import { BiExpandAlt } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const galleryImages = [
  { src: Gallery1, alt: "Gallery Image 1" },
  { src: Gallery2, alt: "Gallery Image 2" },
  { src: Gallery3, alt: "Gallery Image 3" },
  { src: Gallery1, alt: "Gallery Image 1" },
  { src: Gallery2, alt: "Gallery Image 2" },
  { src: Gallery3, alt: "Gallery Image 3" },
];

function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const selectImage = (index) => {
    setCurrentImageIndex(index);
  };

  const upcomingImages = [
    galleryImages[(currentImageIndex + galleryImages.length - 1) % galleryImages.length],
    galleryImages[currentImageIndex],
    galleryImages[(currentImageIndex + 1) % galleryImages.length],
  ];

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 mt-[100px] flex gap-[20px] sm:gap-[30px] md:gap-[40px]">
      <div className="h-[300px] sm:h-[500px] md:h-[691px] lg:h-[691px] w-full sm:w-[500px] md:w-[691px] bg-[#ACEDF6] rounded-[25px] relative overflow-hidden hidden lg:block">
        <img
          src={galleryImages[currentImageIndex].src}
          alt={galleryImages[currentImageIndex].alt}
          className="w-full h-full object-contain rounded-[25px] transition-opacity duration-500"
        />
      </div>

      <div className="flex flex-col justify-end items-center">
        <div className="w-[280px] xs:w-[85%] sm:w-[350px] md:w-[382px] flex flex-col xs:ml-0 lg:ml-20 md:ml-20 ">
          <h1 className="text-[30px] sm:text-[40px] md:text-[50px] mb-[20px] sm:mb-[25px] md:mb-[28px]">Travel Moments Captured!</h1>
          <p className="text-[16px] sm:text-[20px] md:text-[25px] mb-[20px] sm:mb-[25px] md:mb-[28px]">
            Relive the unforgettable moments captured by our travelers. Discover
            the beauty, joy, and adventures that await with Hayal.
          </p>
          <hr className="mb-[20px] sm:mb-[25px] md:mb-[28px]" />
          <div className="flex justify-start gap-3 sm:gap-4 mb-[20px] sm:mb-[28px]">
            <button className="border-2  border-black px-3 py-1 rounded-full text-sm h-[40px] w-[40px] flex items-center justify-center">
              <BiExpandAlt />
            </button>
            <button
              className="border-2 border-black px-3 py-1 rounded-full text-sm h-[40px] w-[40px] flex items-center justify-center"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </button>
            <button
              className="border-2 border-black px-3 py-1 rounded-full text-sm h-[40px] w-[40px] flex items-center justify-center"
              onClick={nextImage}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-3 md:gap-4 w-[280px] xs:w-[66%] ml-0 xs:-ml-[94px] ">
          {upcomingImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-[120px] xs:w-[100px] sm:w-[150px] md:w-[187px] h-[120px] sm:h-[150px] md:h-[187px] object-cover rounded-[15px] transition-transform duration-300 ease-in-out ${
                index === 1 ? "shadow-2xl" : "shadow-sm"
              }`}
              onClick={() =>
                selectImage(
                  (currentImageIndex + index - 1 + galleryImages.length) % galleryImages.length
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
