import React from "react";
import homeBanner from "../assets/Home/Home Banner.png";
import HomeCard from "../Components/homeCard";
import EveryJourney from "../Components/EveryJourney";
import TrendingUp from "../assets/Home/Trending_Up.svg";
import ArrowUpRight from "../assets/Home/Arrow_Up_Right.svg";
// import { TrendingUpIcon } from "hero";

function Home() {
  return (
    <div>
      <div className="flex justify-center mt-[34px] text-white">
        <div className="">
          <img
            src={homeBanner}
            alt=""
            className="backGround rounded-[20px] w-full"
          />
          <div className="flex justify-end items-end flex-col text-right pr-5 sm:pr-[50px] lg:pr-[100px] -mt-[650px] relative">
            {/* Popular Destination */}
            <div className="border-white border-2 p-2 rounded-3xl text-sm sm:text-base flex items-center gap-2">
              <p>Popular Destination</p>
              <img src={TrendingUp} alt="" />
            </div>
            {/* Title */}
            <p className="text-[40px] sm:text-[60px] lg:text-[80px] mt-4 leading-tight">
              explore <span className="font-bold">Thailand</span> <br /> with{" "}
              <span className="font-bold">Hayal</span>
            </p>
            {/* Learn More */}
            <div className="text-black flex gap-3 bg-white p-2 pl-5 rounded-3xl items-center mt-[30px]">
              <p className="text-sm sm:text-base">
                {" "}
                <u>Learn More</u>{" "}
              </p>
              <div className="bg-black w-[30px] h-[30px] rounded-full text-white flex items-center justify-center">
                <img src={ArrowUpRight} alt="" />
              </div>
            </div>
            {/* Information Box */}
            <HomeCard />
          </div>
        </div>
      </div>
      <div>
        <EveryJourney />
      </div>
    </div>
  );
}

export default Home;
