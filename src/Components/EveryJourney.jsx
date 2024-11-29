import Boy from "../assets/Home/BoyIcon.png";
import Bali from "../assets/Home/CardImages/Bali.png";
import Malaysia from "../assets/Home/CardImages/Malaysia.png";
import Thailand from "../assets/Home/CardImages/Thailand.png";
import Turkey from "../assets/Home/CardImages/Turkey.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";

function EveryJourney() {
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const destinations = [
    {
      img: Bali,
      title: "Bali",
      description:
        "Where the sunsets heal, and every moment feels like paradise",
      alt: "Bali",
      price: "20000",
      duration: "3 Days & 4 Nights",
    },
    {
      img: Malaysia,
      title: "Malaysia",
      description:
        "Where vibrant cultures, breathtaking nature, and warm smiles meet",
      alt: "Malaysia",
      price: "25000",
      duration: "5 Days & 6 Nights",
    },
    {
      img: Thailand,
      title: "Thailand",
      description:
        "Where golden temples, lush jungles, and smiles create unforgettable memories",
      alt: "Thailand",
      price: "18000",
      duration: "3 Days & 4 Nights",
    },
    {
      img: Turkey,
      title: "Turkey",
      description:
        "Where ancient history and vibrant culture beautifully collide",
      alt: "Turkey",
      price: "30000",
      duration: "6 Days & 7 Nights",
    },
    {
      img: Turkey,
      title: "Manali",
      description:
        "Where golden temples, lush jungles, and smiles create unforgettable memories",
      alt: "Maldives",
      price: "35000",
      duration: "5 Days & 6 Nights",
    },
  ];

  return (
    <div className="mx-20">
      <div>
        <div className="w-[50%] flex items-center justify-between">
          <div className="every text-[50px]">
            Every journey <br /> is unique
          </div>
          <div className="btn flex gap-4">
            <button
              className={`border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center ${
                isPrevDisabled
                  ? "border-gray-400 text-gray-400"
                  : "border-black text-black"
              }`}
              id="prevArrow"
              disabled={isPrevDisabled}
            >
              &#8592;
            </button>
            <button
              className={`border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center ${
                isNextDisabled
                  ? "border-gray-400 text-gray-400"
                  : "border-black text-black"
              }`}
              id="nextArrow"
              disabled={isNextDisabled}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 -mt-20">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="whitespace-nowrap text-gray-700">(VIEW ALL)</p>
          <img src={Boy} alt="" className="h-[215px]" />
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            prevEl: "#prevArrow",
            nextEl: "#nextArrow",
          }}
          modules={[Navigation]}
          className="my-8"
          onReachBeginning={() => setIsPrevDisabled(true)}
          onReachEnd={() => setIsNextDisabled(true)}
          onFromEdge={() => {
            setIsPrevDisabled(false);
            setIsNextDisabled(false);
          }}
        >
          {destinations.map((destination, index) => (
           <SwiperSlide key={index}>
           <div className="flex flex-col items-center gap-4">
             <div
               className={`w-[320px] h-[320px] rounded-[20px] bg-cover bg-center p-11 text-white flex ${
                 index % 2 === 0 ? "items-start" : "items-end"
               }`}
               style={{ backgroundImage: `url(${destination.img})` }}
             >
               <div className="details">
                 <p className="text-[30px]">{destination.title}</p>
                 <p className="text-[18px]">{destination.description}</p>
               </div>
             </div>
             <div className="flex justify-between items-center bg-[#FFFED4] rounded-[20px] w-[320px] p-3">
               <div className="flex flex-col">
                 <span className="text-[15px]">From</span>
                 <p className="text-[20px]">₹ {destination.price}</p>
               </div>
               <div className="text-right text-[15px] w-16">
                 <p>{destination.duration}</p>
               </div>
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default EveryJourney;
