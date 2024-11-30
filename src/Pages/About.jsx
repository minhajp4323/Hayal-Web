import Navbar from "../Components/Navbar";
import aboutBG from "../assets/About/AboutBG.png";
import Girl from "../assets/About/Girl.png";
import Boy from "../assets/About/Boy.png";
import person1 from "../assets/About/Person1.png";
import Footer from "../Components/Footer";
import InsideHayal from "../Components/AboutComponent/InsideHayal";

function About() {
  return (
    <div className="bg-[#FBB800] ">
      <div className="pt-[50px]">
        <Navbar />
      </div>
      <div
        className="flex bg-no-repeat bg-center bg-cover lg:mx-[152px] md:mx-[12px]  h-[450px] pt-[170px] items-start justify-end"
        style={{ backgroundImage: `url(${aboutBG})` }}
      >
        <div className="flex gap-20 justify-center ">
          <img src={Girl} alt="" className="h-[244px] mt-44 -mr-44" />

          <div className="flex">
            <h1 className="text-[50px] w-[350px] ">
              The Heart of <br /> Hayal
            </h1>
            <p className="text-[25px] w-[557px]">
              At Hayal, we’re more than just a travel company—we’re your
              partners in creating unforgettable adventures at any age. With a
              passion for discovery and a commitment to exceptional service, we
              design personalized travel experiences that turn your dreams into
              reality. Explore the world with a team that cares about every
              detail of your journey.
            </p>
          </div>
          <img src={Boy} alt="" className="h-[244px] mt-44 -ml-20" />
        </div>
        <div className="flex justify-end items-end"></div>
      </div>
      <div>
        <div className="mt-[145px] flex flex-col justify-center items-center ">
          <div className="w-[1400px] flex justify-center ml-56">
            <hr className=" w-52 border-t-2 border-black " />
            <h1 className="w-[350px] text-[50px] text-center">
              People Behind <br /> Hayal
            </h1>
            <hr className="w-[420px] border-t-2 border-black" />
          </div>

          <p className="w-[735px] text-center text-[25px] mt-[30px]">
            A group of passionate travel enthusiasts dedicated to making your
            journeys extraordinary. With diverse backgrounds and years of
            expertise, we bring creativity, attention to detail, and
            personalized service to every travel plan. Meet the people who turn
            your travel dreams into reality.
          </p>
        </div>
        <div className="flex justify-center items-center min-h-screen mt-[40px]">
          <div className="grid grid-cols-3 gap-12">
            {/* First row */}
            <div
              className="h-[367px] w-[300px] bg-cover bg-center flex justify-center items-end rounded-3xl"
              style={{ backgroundImage: `url(${person1})` }}
            >
              <div
                className="w-[263px] bg-white h-[69px] mb-4 rounded-3xl  text-center items-center"
                style={{
                  boxShadow: "0px 0px 20px 10px rgba(233, 163, 71, 0.5)",
                }}
              >
                <h1 className="mt-1 text-[20px] font-bold">Name</h1>
                <p className="text-[18px]">Position</p>
              </div>
            </div>
            <div
              className="h-[367px] w-[300px] bg-cover bg-center flex justify-center items-end rounded-3xl"
              style={{ backgroundImage: `url(${person1})` }}
            >
              <div
                className="w-[263px] bg-white h-[69px] mb-4 rounded-3xl  text-center items-center"
                style={{
                  boxShadow: "0px 0px 20px 10px rgba(233, 163, 71, 0.5)",
                }}
              >
                <h1 className="mt-1 text-[20px] font-bold">Name</h1>
                <p className="text-[18px]">Position</p>
              </div>
            </div>
            <div
              className="h-[367px] w-[300px] bg-cover bg-center flex justify-center items-end rounded-3xl"
              style={{ backgroundImage: `url(${person1})` }}
            >
              <div
                className="w-[263px] bg-white h-[69px] mb-4 rounded-3xl  text-center items-center"
                style={{
                  boxShadow: "0px 0px 20px 10px rgba(233, 163, 71, 0.5)",
                }}
              >
                <h1 className="mt-1 text-[20px] font-bold">Name</h1>
                <p className="text-[18px]">Position</p>
              </div>
            </div>

            {/* Second row */}
            <div className="col-span-3 flex justify-center gap-12">
              <div
                className="h-[367px] w-[300px] bg-cover bg-center flex justify-center items-end rounded-3xl"
                style={{ backgroundImage: `url(${person1})` }}
              >
                <div
                  className="w-[263px] bg-white h-[69px] mb-4 rounded-3xl  text-center items-center"
                  style={{
                    boxShadow: "0px 0px 20px 10px rgba(233, 163, 71, 0.5)",
                  }}
                >
                  <h1 className="mt-1 text-[20px] font-bold">Name</h1>
                  <p className="text-[18px]">Position</p>
                </div>
              </div>
              <div
                className="h-[367px] w-[300px] bg-cover bg-center flex justify-center items-end rounded-3xl"
                style={{ backgroundImage: `url(${person1})` }}
              >
                <div
                  className="w-[263px] bg-white h-[69px] mb-4 rounded-3xl  text-center items-center"
                  style={{
                    boxShadow: "0px 0px 20px 10px rgba(233, 163, 71, 0.5)",
                  }}
                >
                  <h1 className="mt-1 text-[20px] font-bold">Name</h1>
                  <p className="text-[18px]">Position</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <InsideHayal />
      </div>
    </div>
  );
}

export default About;
