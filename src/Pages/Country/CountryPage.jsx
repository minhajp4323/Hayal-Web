import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi2";
import HomeCard from "../../Components/homeCard";
import TouristBoy from "../../assets/Destination/TouristBoy.svg";
import Banner from "../../assets/Destination/Malysia/Malaysia.png";
import Malysia1 from "../../assets/Destination/Malysia/Packages/Malysia1.png";

function CountryPage() {
  const packages = [
    {
      title: "Tour to Malaysia with Genting & Kuala Lumpur",
      cover: Malysia1,
      days: 3,
      nights: 3,
      places: ["Kuala Lumpur", "Genting Highlands"],
      highlights: ["Speed Boat", "Kayaking", "Coral Island"],
    },
    {
      title: "Explore Penang and Langkawi Islands",
      cover: Malysia1,
      days: 4,
      nights: 4,
      places: ["Penang", "Langkawi"],
      highlights: ["Beaches", "Night Markets", "Cable Car"],
    },
    {
      title: "Discover Borneo Adventure",
      cover: Malysia1,
      days: 5,
      nights: 5,
      places: ["Kota Kinabalu", "Mount Kinabalu"],
      highlights: ["Hiking", "Wildlife Safari", "Rainforest Tour"],
    },
    {
      title: "Discover Borneo Adventure",
      cover: Malysia1,
      days: 5,
      nights: 5,
      places: ["Kota Kinabalu", "Mount Kinabalu"],
      highlights: ["Hiking", "Wildlife Safari", "Rainforest Tour"],
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
              className="h-[130px] absolute bottom-0 left-2 "
            />
            <div className="ml-[150px] mt-3">
              <p className="text-[16px]">Selected Destination: </p>
              <p className="text-[30px]">Malaysia</p>
            </div>
          </div>
          <div className="w-[504px]">
            <p className="text-[21px]">
              Showing {packages.length} packages for the selected destination.
              Compare and choose the best for you and your co-travelers.
            </p>
          </div>
        </div>
        {packages.map((pkg, index) => (
          <div className="flex w-[1142px] justify-between" key={index}>
            <div>
              <img
                src={pkg.cover}
                alt="Cover Image"
                className="h-[376px] w-[376px] rounded-[25px]"
              />
            </div>
            <div className="flex flex-col bg-white p-8 px-14 rounded-[25px] gap-2 w-[736px] h-[376px]">
              <h1 className="text-[25px] font-bold">{pkg.title}</h1>
              <div className="flex gap-2">
                <div className="flex gap-2 px-3 py-2 border-[2px] border-black rounded-full items-center">
                  <IoSunnyOutline />
                  <p>{pkg.days} Days</p>
                </div>
                <div className="flex gap-2 px-3 py-2 border-[2px] border-black rounded-full items-center">
                  <HiOutlineMoon />
                  <p>{pkg.nights} Nights</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#9C9C9C] text-[16px]">Places Covered :</p>
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
                <p className="text-[#9C9C9C] text-[16px]">Highlights :</p>
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
              <div className="bg-[#47BCCB] rounded-full flex justify-center items-center h-[51px] w-[126px] text-[15px] font-bold text-white cursor-pointer mt-3">
                VIEW DEAL
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default CountryPage;
