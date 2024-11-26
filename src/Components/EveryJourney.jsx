import Boy from "../assets/Home/BoyIcon.png";
import Bali from "../assets/Home/CardImages/Bali.png";
import Malaysia from "../assets/Home/CardImages/Malaysia.png";
import Thailand from "../assets/Home/CardImages/Thailand.png";
import Turkey from "../assets/Home/CardImages/Turkey.png";

function EveryJourney() {
  return (
    <div className="mx-20">
      <div>
        <div className="w-[50%] flex items-center justify-between">
          <div className="every text-[50px]">
            Every journey <br /> is unique
          </div>
          <div className="btn flex gap-4">
            <button
              className="border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              style={{ borderColor: "black" }}
            >
              &#8592; {/* Left Arrow */}
            </button>
            <button
              className="border-2 px-3 py-1 rounded-full text-sm h-[50px] w-[50px] flex items-center justify-center"
              style={{ borderColor: "black" }}
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <hr className="flex-grow border-t border-gray-300" />
          <p className="whitespace-nowrap text-gray-700">(VIEW ALL)</p>
          <img src={Boy} alt="" className="h-[215px]" />
        </div>
        <div className="grid grid-cols-4 gap-[30px]">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[300px] h-[300px]">
              <img
                src={Bali}
                alt="Image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <div>
                <p>
                  from <br />
                  $20000
                    </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-[300px] h-[300px]">
              <img
                src={Malaysia}
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <p className="text-sm">Text 2</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-[300px] h-[300px]">
              <img
                src={Thailand}
                alt="Image 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <p className="text-sm">Text 3</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="w-[300px] h-[300px]">
              <img
                src={Turkey}
                alt="Image 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full">
              <p className="text-sm">Text 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EveryJourney;
