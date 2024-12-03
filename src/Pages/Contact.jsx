import Form from "../Components/Form";
import ContactBG from "../assets/Contact/ContactBG.svg";
import Earth from "../assets/Contact/Earth.png";
import Footer from "../Components/Footer";
import Address from "../assets/Contact/Address.svg";
import Phone from "../assets/Contact/Phone.svg";
import Navbar from "../Components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar/>
      <div
        className=" h-[660px] mx-[120px] mt-[110px]    "
        style={{
          backgroundImage: `url(${ContactBG})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-between  ">
          <div>
            <div className="flex gap-2">
              <img src={Earth} alt="Earth" />
              <p>Let's go around the world</p>
            </div>
            <p className="flex flex-col text-[58px] font-extrabold">
              <span className="text-[#FBB800]">Adventure</span>
              <span className="text-[#47BCCB] -mt-5">Awaits!</span>
            </p>
            <p className="w-[351px] text-[22px]">
              Discover the world with our tailored travel packages, crafted to
              make every journey unforgettable.
            </p>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-12 mt-10 m-[69px]">
        <div className="bg-white text-[20px] flex w-[541px] rounded-[20px] p-[30px]">
          <img src={Address} alt="image" />
          <div className="w-[227px]">
            <h1 className="font-bold">Address</h1>
            <p>
              Hayal brings your travel dreams to life with personalized,
              unforgettable experiences.
            </p>
          </div>
        </div>
        <div className="bg-white text-[20px] flex w-[541px] rounded-[20px] p-[30px]">
          <img src={Phone} alt="Phone" />
          <div className="flex flex-col gap-2">
            <div className="w-[227px]">
              <h1 className="font-bold">Phone</h1>
              <p>0987654321</p>
              <p>0987654321</p>
            </div>
            <div>
              <h1 className="font-bold">Email</h1>
              <p>sample@gmail.com</p>
              <p>sample@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
