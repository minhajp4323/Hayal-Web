import Boy from "../assets/Home/BoyIcon.png"
import Bali from "../assets/Home/CardImages/Bali.png";
import Malaysia from "../assets/Home/CardImages/Malaysia.png";
import Thailand from "../assets/Home/CardImages/Thailand.png";
import Turkey from "../assets/Home/CardImages/Turkey.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function EveryJourney() {
  const destinations = [
    { img: Bali, alt: "Bali", price: "$20000", duration: "3 Days & 4 Nights" },
    {
      img: Malaysia,
      alt: "Malaysia",
      price: "$25000",
      duration: "5 Days & 6 Nights",
    },
    {
      img: Thailand,
      alt: "Thailand",
      price: "$18000",
      duration: "3 Days & 4 Nights",
    },
    {
      img: Turkey,
      alt: "Turkey",
      price: "$30000",
      duration: "6 Days & 7 Nights",
    },
    {
      img: Turkey,
      alt: "Maldives",
      price: "$35000",
      duration: "5 Days & 6 Nights",
    },
    {
      img: Turkey,
      alt: "Paris",
      price: "$40000",
      duration: "7 Days & 8 Nights",
    },
    {
      img: Turkey,
      alt: "Dubai",
      price: "$22000",
      duration: "4 Days & 5 Nights",
    },
    {
      img: Turkey,
      alt: "Greece",
      price: "$28000",
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
              className="border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              style={{ borderColor: "black" }}
            >
              &#8592;
            </button>
            <button
              className="border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              style={{ borderColor: "black" }}
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
        <div className="relative -mt-20">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full text-sm"
            id="prevArrow"
          >
            ‹
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full text-sm"
            id="nextArrow"
          >
            ›
          </button>

          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
              prevEl: "#prevArrow",
              nextEl: "#nextArrow",
            }}
            modules={[Navigation]}
            className="my-8"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center gap-4">
                  <div
                    className="w-[300px] h-[300px] rounded-[20px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.img})` }}
                  ></div>
                  <div className="flex justify-between items-center bg-[#FFFED4] rounded-md w-[300px] p-3">
                    <div className="flex flex-col">
                      <span className="text-[15px]">From</span>
                      <p className="text-[20px]">{destination.price}</p>
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
    </div>
  );
}

export default EveryJourney;
