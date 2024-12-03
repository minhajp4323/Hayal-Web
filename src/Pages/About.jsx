import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import aboutBG from "../assets/About/AboutBG.png";
import Girl from "../assets/About/Girl.png";
import Boy from "../assets/About/Boy.png";
import person1 from "../assets/About/Person1.png";
import Footer from "../Components/Footer";
import InsideHayal from "../Components/AboutComponent/InsideHayal";

function About() {
  return (
    <div className="bg-[#FBB800]">
      <Navbar />

      {/* Intro Section with Animation */}
      <div
        className="flex bg-no-repeat bg-center bg-cover lg:mx-[152px] md:mx-[12px] h-[450px] pt-[170px] items-start justify-end"
        style={{ backgroundImage: `url(${aboutBG})` }}
      >
        <motion.div
          className="flex gap-20 justify-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={Girl}
            alt="Girl"
            className="h-[244px] mt-44 -mr-44"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.div
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-[50px] w-[350px]">
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
          </motion.div>
          <motion.img
            src={Boy}
            alt="Boy"
            className="h-[244px] mt-44 -ml-20"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      {/* People Behind Hayal Section */}
      <div>
        <div className="mt-[145px] flex flex-col justify-center items-center">
          <motion.div
            className="w-[1400px] flex justify-center ml-56"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "left center" }}
          >
            <hr className=" w-52 border-t-2 border-black" />
            <h1 className="w-[350px] text-[50px] text-center">
              People Behind <br /> Hayal
            </h1>
            <hr className="w-[420px] border-t-2 border-black" />
          </motion.div>

          <motion.p
            className="w-[735px] text-center text-[25px] mt-[30px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            A group of passionate travel enthusiasts dedicated to making your
            journeys extraordinary. With diverse backgrounds and years of
            expertise, we bring creativity, attention to detail, and
            personalized service to every travel plan. Meet the people who turn
            your travel dreams into reality.
          </motion.p>
        </div>

        {/* Team Cards with Staggered Animation */}
        <motion.div
          className="flex justify-center items-center min-h-screen mt-[40px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <div className="grid grid-cols-3 gap-12">
            {[...Array(5)].map((_, index) => (
              <motion.div
                key={index}
                className="h-[367px] w-[300px] bg-cover bg-center flex justify-center items-end rounded-3xl"
                style={{ backgroundImage: `url(${person1})` }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div
                  className="w-[263px] bg-white h-[69px] mb-4 rounded-3xl text-center items-center"
                  style={{
                    boxShadow: "0px 0px 20px 10px rgba(233, 163, 71, 0.5)",
                  }}
                >
                  <h1 className="mt-1 text-[20px] font-bold">Name</h1>
                  <p className="text-[18px]">Position</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Inside Hayal Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <InsideHayal />
      </motion.div>
    </div>
  );
}

export default About;
