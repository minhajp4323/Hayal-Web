import CycleGirl from "../../assets/Home/CycleGirl.png";

function WhyChoose() {
  return (
    <div className="flex mx-20 h-screen items-end">
      <div className="flex text-[18px]">
        <p>(LEARN MORE ABOUT US)</p>
      </div>

      <div className="flex flex-col justify-center items-center text-center flex-grow">
        <div className=" flex justify-between w-[557px]">
          <div className=" text-left text-[50px] w-[350px]">
            Why Choose <br /> Hayal?
          <hr className="bg-[#ABD4DA]" />
          </div>
          <div className="mt-4 ">
            <img src={CycleGirl} alt="Cycle Girl" className="w-[281px] " />
          </div>
        </div>
        <div className="w-[557px] mt-4 text-left text-[25px]">
          <p>
            At Hayal, we turn your travel dreams into reality with personalized
            packages, exceptional service, and insider knowledge.
            <br />
            <br /> From seamless planning to unforgettable experiences, we
            ensure every journey is unique and stress-free. Discover the world
            with a partner you can trust.
          </p>
        </div>
      </div>

      <div className="flex justify-end text-[18px]">
        <p>(TRAVELED WITH US? <br /> RATE YOUR EXPERIENCE)</p>
      </div>
    </div>
  );
}

export default WhyChoose;
