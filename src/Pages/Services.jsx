import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ServicesBG from "../assets/Services/ServicesBG.png";
import LineBG from "../assets/Services/LineBG.svg";

function Services() {
  const introRef = useRef(null);
  const servicesRef = useRef(null);

  const isIntroInView = useInView(introRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#FBB800]">
      <div
        className="h-[904px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 55%, #FBB800 85% ), url(${ServicesBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
      </div>

      <div className="flex flex-col justify-center items-center" ref={introRef}>
        <motion.div
          className="flex gap-[23px] mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.8, delay: 0.1, ease: "easeOut" }}
        >
          <h1 className="text-[50px] w-[350px]">Your Journey, Our Expertise</h1>
          <p className="text-[23px] w-[557px]">
            At Hayal, we go beyond simply planning trips—we create seamless
            travel experiences tailored to your every need. Whether you’re
            embarking on a family vacation, a romantic getaway, or an adventure
            of a lifetime, our dedicated team ensures every detail is taken care
            of. From paperwork to planning, we handle it all with precision and
            care, leaving you free to focus on enjoying the journey. Trust us to
            make every aspect of your travel smooth, stress-free, and
            unforgettable.
          </p>
        </motion.div>

        <div
          className="h-[1200px] w-[1050px] flex justify-center mt-[121px]"
          style={{
            backgroundImage: `url(${LineBG})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          ref={servicesRef}
        >
          <motion.div
            className="flex flex-col gap-[60px] w-[557px]"
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.5 },
              },
            }}
          >
            <motion.div
              className="flex flex-col mt-6"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h1 className="text-[30px] font-bold">
                Personalized Holiday <br /> Planning
              </h1>
              <p className="text-[23px] w-[557px]">
                Turn your dream vacation into reality with our expertly crafted
                holiday packages. We tailor every detail to your preferences,
                ensuring unforgettable experiences and lasting memories.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col text-right"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h1 className="text-[30px] font-bold">
                Hassle-Free Visa <br /> Assistance
              </h1>
              <p className="text-[23px]">
                Navigating visa processes can be tricky, but we’ve got you
                covered. Our team provides end-to-end support to ensure a smooth
                and worry-free visa application process.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <h1 className="text-[30px] font-bold">
                Flight Ticket <br /> Booking
              </h1>
              <p className="text-[23px]">
                Turn your dream vacation into reality with our expertly crafted
                holiday packages. We tailor every detail to your preferences,
                ensuring unforgettable experiences and lasting memories.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col text-right"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1, delay: 1 }}
            >
              <h1 className="text-[30px] font-bold">
                Documentation <br /> Support
              </h1>
              <p className="text-[23px]">
                Turn your dream vacation into reality with our expertly crafted
                holiday packages. We tailor every detail to your preferences,
                ensuring unforgettable experiences and lasting memories.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
