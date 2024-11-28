function ContactForm() {
  return (
    <div className="w-full max-w-[674px] mx-auto mt-6">
      <div className="flex flex-col">
        <div className="flex flex-col mb-4">
          <label htmlFor="Destination" className="text-lg font-semibold">
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

        <div className="flex flex-col sm:flex-row sm:gap-[30px] mb-4">
          <div className="flex flex-col sm:w-[48%]">
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
              className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full placeholder-white text-white"
            />
          </div>
        </div>

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
                className="bg-[#22BCD3] p-[15px] rounded-[15px] h-[62px] w-full sm:w-[182px] placeholder-white text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="bg-[#FBB800] w-[322px] h-[62px] rounded-[15px] mt-7">
        ENQUIRE
      </button>
    </div>
  );
}

export default ContactForm;
