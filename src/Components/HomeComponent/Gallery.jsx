import  { useState } from "react";
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
    <div className="mx-20 mt-[100px] flex gap-[40px]">
      <div className="h-[691px] w-[691px] bg-[#ACEDF6] rounded-[25px] relative overflow-hidden">
        <img
          src={galleryImages[currentImageIndex].src}
          alt={galleryImages[currentImageIndex].alt}
          className="w-full h-full object-contain rounded-[25px] transition-opacity duration-500"
          style={{
            opacity: 1,
            transition: "opacity 0.5s ease-in-out", 
          }}
        />
      </div>

      <div className="flex flex-col justify-end items-center">
        <div className="w-[372px] flex flex-col">
          <h1 className="text-[50px] mb-[28px]">Travel Moments Captured!</h1>
          <p className="text-[25px] mb-[28px]">
            Relive the unforgettable moments captured by our travelers. Discover
            the beauty, joy, and adventures that await with Hayal.
          </p>
          <hr className="mb-[28px]" />
          <div className="flex justify-start gap-4 mb-[28px]">
            <button className="border-2 border-black px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center">
              <BiExpandAlt />
            </button>
            <button
              className="border-2 border-black px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              onClick={prevImage}
            >
              <FaArrowLeft />
            </button>
            <button
              className="border-2 border-black px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              onClick={nextImage}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex gap-2">
          {upcomingImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-[187px] h-[187px] object-cover rounded-[15px] transition-transform duration-300 ease-in-out ${
                index === 1 ? "shadow-2xl" : "shadow-sm"
              }`}
              onClick={() => selectImage((currentImageIndex + index - 1 + galleryImages.length) % galleryImages.length)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
