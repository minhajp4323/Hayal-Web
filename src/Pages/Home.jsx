import homeBanner from "../assets/Home/Home Banner.png";
import HomeCard from "../Components/homeCard";
import TrendingUp from "../assets/Home/Trending_Up.svg";
import ArrowUpRight from "../assets/Home/Arrow_Up_Right.svg";
import EveryJourney from "../Components/EveryJourney";
import WhyChoose from "../Components/HomeComponent/WhyChoose";
import Testimonial from "../Components/HomeComponent/Testimonial";
import LetsPlan from "../assets/Home/LetsPlan.png";
import Gallery from "../Components/HomeComponent/Gallery";

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
      <div>
        <WhyChoose />
      </div>
      <div>
        <Testimonial />
      </div>
      {/* Contact */}
      <div className="flex flex-row md:flex-row lg:flex-row sm:flex-col xs:flex-col mt-[108px] mx-4 sm:mx-20">
        {/* Left Section */}
        <div className="flex mx-0 sm:mx-20 h-auto sm:h-[305px] xs:w-full">
          <div className="flex flex-col justify-between w-[50%] sm:w-[50%]">
            <p className="text-[30px] md:text-[40px] sm:text-[25px]">
              Let’s Plan Your <br />
              Dream Trip!
            </p>
            {/* First Enquire Button (visible on larger screens only) */}
            <button className="bg-[#FBB800] w-[322px] h-[62px] rounded-[15px] mt-7 text-white sm:block md:block lg:block xl:block hidden">
              ENQUIRE
            </button>
          </div>

          <div className="">
            <img
              src={LetsPlan}
              alt=""
              className="h-auto sm:h-[205px] md:h-[305px] lg:h-[305px] xs:h-[205px] w-full object-contain"
            />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full max-w-[674px] mx-auto mt-6 sm:mt-0 sm:mx-8 ">
          <div className="flex flex-col">
            {/* Destination Dropdown */}
            <div className="flex flex-col mb-4">
              <label htmlFor="Destination" className="text-[lg] font-semibold">
                DESTINATION
              </label>
              <select
                className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full placeholder-white text-white"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Choose Your Destination
                </option>
                <option value="paris">Paris, France</option>
                <option value="bali">Bali, Indonesia</option>
                <option value="tokyo">Tokyo, Japan</option>
              </select>
            </div>

            {/* Traveller and Date */}
            <div className="flex flex-col sm:flex-row sm:gap-[30px] mb-4">
              <div className="flex flex-col sm:w-[%]">
                <label htmlFor="Traveller" className="text-lg font-semibold">
                  TRAVELLER
                </label>
                <div className="flex gap-[15px]">
                  <input
                    type="number"
                    placeholder="Adults"
                    className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full sm:w-[127px] placeholder-white text-white"
                  />
                  <input
                    type="number"
                    placeholder="Children"
                    className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full sm:w-[180px] placeholder-white text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:w-[48%] relative">
                <label htmlFor="Date" className="text-lg font-semibold">
                  DATE
                </label>
                <input
                  type="date"
                  className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full lg:w-full placeholder-white text-white"
                />
              </div>
            </div>

            {/* Name and Phone */}
            <div className="flex flex-col sm:flex-row sm:gap-[30px] mb-4">
              <div className="flex flex-col sm:w-[48%]">
                <label htmlFor="Name" className="text-lg font-semibold">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full placeholder-white text-white"
                />
              </div>

              <div className="flex flex-col sm:w-[48%]">
                <label htmlFor="Phone" className="text-lg font-semibold">
                  PHONE
                </label>
                <div className="flex gap-[10px]">
                  <input
                    type="text"
                    placeholder="IND"
                    className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full sm:w-[130px] placeholder-white text-white"
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full sm:w-full placeholder-white text-white"
                  />
                </div>
              </div>
            </div>

            {/* Second Enquire Button (visible on smaller screens only) */}
            <button className="bg-[#FBB800] w-full h-[62px] rounded-[15px] mt-7 text-white sm:block lg:hidden">
              ENQUIRE
            </button>
          </div>
        </div>
      </div>

      <div>
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
