import React from "react";
import Navbar from "../Components/Navbar";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi2";
// import HomeCard from "../../Components/homeCard";
import TouristBoy from "../assets/Destination/TouristBoy.svg";
import Banner from "../assets/Destination/Malysia/Packages/Malysia3.png";
import Malysia1 from "../assets/Destination/Malysia/Packages/Malysia2.png";
import HomeCard from "../Components/homeCard";

function OverView() {
  const packages = [
    {
      title: "Tour to Malaysia with Genting & Kuala Lumpur",
      cover: Malysia1,
      days: 3,
      nights: 3,
      places: ["Kuala Lumpur", "Genting Highlands"],
      highlights: ["Speed Boat", "Kayaking", "Coral Island"],
    },
  ];

  return (
    <div className="pt-[50px]">
      <Navbar />
      <div className="mt-[40px]">
        <div className="flex flex-col mx-[60px] ">
          <img
            src={Banner}
            alt="Destination banner"
            className="w-[1392px] h-[369px] rounded-[30px]"
          />
          <div className="absolute right-[185px] bottom-14">
            <HomeCard />
          </div>
        </div>
      </div>
      <div className="px-[180px] flex flex-col gap-[50px] ">
        <div className="flex flex-col gap-4 mt-11">
          <div className="flex bg-white h-[92px] w-[356px] relative rounded-[20px]">
            <img
              src={TouristBoy}
              alt="boy"
              className="h-[130px] absolute bottom-0 left-3"
            />
            <div className="ml-[140px] mt-3">
              <p className="text-[16px]">Selected Destination: </p>
              <p className="text-[30px]">Malaysia</p>
            </div>
          </div>
        </div>
        {packages.map((pkg, index) => (
          <div className="flex flex-col w-[1142px] justify-between" key={index}>
            <div className="flex flex-col   rounded-[25px] gap-2 w-[504px] h-[376px] ">
              <h1 className="text-[25px] font-bold">{pkg.title}</h1>
              <div className="flex gap-2">
                <div className="flex gap-2 px-3 py-2 border-[2px] bg-white border-black rounded-full items-center">
                  <IoSunnyOutline />
                  <p>{pkg.days} Days</p>
                </div>
                <div className="flex gap-2 px-3 py-2 border-[2px] bg-white border-black rounded-full items-center">
                  <HiOutlineMoon />
                  <p>{pkg.nights} Nights</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#9C9C9C] text-[16px]">Places Covered</p>
                <div className="flex text-[20px] gap-2">
                  {pkg.places.map((place, idx) => (
                    <React.Fragment key={idx}>
                      {idx > 0 && <div> {" > "} </div>}
                      <div>{place}</div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#9C9C9C] text-[16px]">Highlights:</p>
                <div className="flex gap-3">
                  {pkg.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FFF4D6] rounded-full px-4 py-2"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" flex flex-col rounded-[25px] bg-white p-[30px] gap-[30px]">
              <div className="flex gap-2">
                <button className="bg-white px-4 py-2 rounded-full border-2 border-black">
                  Overview
                </button>
                <button className="bg-white px-4 py-2 rounded-full border-2 border-black">
                  Itenary
                </button>
                <button className="bg-white px-4 py-2 rounded-full border-2 border-black">
                  Enquire
                </button>
              </div>
              <div>
                <div className="bg-[#F6FFF9] p-[40px] rounded-[25px] border-[1px]">
                  <h1>Package Inclusion :</h1>
                  <ul>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                    <li>Airfare (Kochi – Bangkok –Kochi)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default OverView;
