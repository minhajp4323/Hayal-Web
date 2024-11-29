import Logo from "../assets/logo2.svg";
import footerBg from "../assets/Footer/FooterBG.png";
import message from "../assets/Footer/MessageICon.png";
import Call from "../assets/Footer/CallIcon.png";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-t from-[#ADFFDB] to-transparent mt-[100px] pb-16 lg:pb-28">
      <div
        className="h-auto lg:h-[318px] bg-center mx-4 md:mx-10 pb-8 lg:pb-11 bg-no-repeat  bg-cover lg:bg-contain"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center h-full text-black gap-10 lg:gap-20 lg:pr-52">
          <div className="max-w-full lg:max-w-[621px] mx-4 lg:mx-10 text-center lg:text-left">
            <img
              src={Logo}
              alt=""
              className="mb-5 lg:mb-[30px] w-32 lg:w-auto mx-auto lg:mx-0"
            />
            <p className="text-[18px] md:text-[20px] lg:text-[25px] leading-6 lg:leading-8">
              Hayal brings your travel dreams to life with personalized,
              unforgettable experiences. From exotic destinations to seamless
              planning, we ensure every journey is a perfect adventure.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start text-[16px] md:text-[18px] lg:text-[20px] gap-5 lg:gap-28">
            <ul className="space-y-2">
              <u>
                <li>Home</li>
                <li>About</li>
                <li>Holidays</li>
                <li>Services</li>
                <li>Contact</li>
              </u>
            </ul>
            <ul className="space-y-2">
              <u>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedin</li>
              </u>
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center mx-10 ">
          <div className="flex gap-5">
            <img
              src={message}
              alt=""
              className="w-20 h-14 sm:w-14 sm:h-14 md:w-32 md:h-20 lg:w-24 lg:h-24"
            />

            <img
              src={Call}
              alt=""
              className="w-20 h-14 sm:w-14 sm:h-14 md:w-32 md:h-20 lg:w-24 lg:h-24"
            />
          </div>
          <hr className=" border-[#44E7A7] w-full" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
