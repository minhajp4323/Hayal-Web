import { useState } from "react";
import TestimonialImg from "../../assets/Home/TestimonialImg.png";
import TestimonialIcon from "../../assets/Home/TestimonialIcon.png";
import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      title: "Bali Bliss: A Honeymoon to Remember with Hayal",
      description:
        "Thanks to Hayal, our Bali honeymoon was nothing short of magical! From the beautiful resorts to the serene beaches and unforgettable excursions, every moment was perfectly planned.",
      rating: "4.9",
      image: TestimonialImg,
    },
    {
      id: 2,
      title: "Adventure Awaits: Discover the Alps",
      description:
        "An unforgettable trip to the Alps with breathtaking views and thrilling activities. Hayal made it all seamless and exciting!",
      rating: "4.8",
      image: TestimonialImg,
    },
    {
      id: 3,
      title: "Serene Beaches: Maldives Magic",
      description:
        "Relaxing by the crystal-clear waters of the Maldives was a dream come true. Hayal took care of every detail!",
      rating: "5.0",
      image: TestimonialImg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="mx-20 mt-[100px]">
      <div>
        <div className="w-[50%] flex items-center justify-between">
          <div className="every text-[50px]">
            Every journey <br /> is unique
          </div>
          <div className="btn flex gap-4">
            <button
              onClick={handlePrevious}
              className="border-2 px-3 py-1 rounded-full text-sm h-[40px] w-[40px] flex items-center justify-center"
              style={{ borderColor: "black" }}
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="border-2 px-3 py-1 rounded-full text-sm h-[40px] w-[40px] flex items-center justify-center"
              style={{ borderColor: "black" }}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 -mt-20 mr-16">
          <hr className="flex-grow border-t border-gray-300" />
          <img src={TestimonialIcon} alt="" className="h-[215px]" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-0 justify-items-center items-center -mt-14 ml-20">
        <div
          className={`flex justify-center items-center relative ml-[10%] transition-transform duration-500 ${
            isAnimating ? "-translate-x-[100%]" : ""
          }`}
        >
          <div className="relative">
            <img
              src={testimonials[currentIndex].image}
              alt="Testimonial"
              className="rounded-[20px] h-[500px] w-[500px] ml-14"
            />
            <div className="absolute flex gap-3 items-center bottom-4 right-4 text-yellow-500 text-[22px] bg-white p-2 rounded-2xl">
              <FaStar />
              <p className="text-black">{testimonials[currentIndex].rating}</p>
            </div>
          </div>

          <div className="absolute z-10 w-[315px] h-[353px] bg-white justify-center items-center p-8 rounded-[20px] shadow-lg -left-20">
            <h1 className="text-[20px] font-bold">
              {testimonials[currentIndex].title}
            </h1>
            <p className="text-[16px] mt-4">
              {testimonials[currentIndex].description}
            </p>
            <p className="text-[#47BCCB] mt-1">
              <u>Read more +</u>
            </p>
          </div>
        </div>

        <div
          className={`flex justify-center items-center relative transition-transform duration-500 ml-44 ${
            isAnimating ? "-translate-x-[100%]" : ""
          }`}
        >
          <div className="relative">
            <img
              src={testimonials[(currentIndex + 1) % testimonials.length].image}
              alt="Testimonial"
              className="rounded-[20px] h-[356px] w-[358px] mb-[100px]"
            />
          </div>

          <div className="absolute z-10 w-[315px] h-[353px] bg-white justify-center items-center p-8 rounded-[20px] shadow-lg -left-20">
            <h1 className="text-[20px] font-bold">
              {testimonials[(currentIndex + 1) % testimonials.length].title}
            </h1>
            <p className="text-[16px] mt-4">
              {
                testimonials[(currentIndex + 1) % testimonials.length]
                  .description
              }
            </p>
            <p className="text-[#47BCCB] mt-1">
              <u>Read more +</u>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
