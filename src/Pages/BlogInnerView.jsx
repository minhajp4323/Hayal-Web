import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function BlogInnerView() {
  return (
    <div>
      <Navbar />
      <div className="mt-[81px] mx-4 sm:mx-6 md:mx-[60px] bg-white p-4 md:p-[30px] rounded-[20px] items-center">
        <div className="border-2 rounded-[20px] p-4 sm:p-[40px] flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center text-center">
            <h6 className="text-[16px] md:text-[18px]">Saudi Arabia</h6>
            <h1 className="text-[20px] md:text-[30px] w-full md:w-[828px] font-semibold mt-4 md:mt-[30px]">
              Saudi Arabia`s Economic Update: Non-Oil Revenues Rise 6% Amid SR30
              Billion Q3 Deficit
            </h1>
            <p className="text-[#A1A1A1] mt-2 md:mt-4 text-[14px] md:text-[18px]">
              Date and Time
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 md:gap-[35px]">
            <div className="bg-slate-300 h-[200px] sm:h-[300px] md:h-[341px] w-full rounded-[20px]">
              image
            </div>
            <p className="text-[14px] sm:text-[16px] md:text-[22px] px-4 sm:px-10 md:px-[195px]">
            Saudi Arabia’s Ministry of Finance has released its latest
              financial report, showing steady growth in non-oil revenues
              alongside a third-quarter budget deficit of SR30 billion. In the
              first nine months of 2024, non-oil revenues increased by 6% and as
              oil revenues grew 16% year-over-year, reflecting the Kingdom’s
              push to diversify its economy beyond oil. <br />
              <br />
              Key Highlights of Q3 Financial Report <br />
              <br /> Saudi Arabia’s total spending in the third quarter reached
              SR339 billion, exceeding revenues of SR309 billion. Of these
              revenues, SR191 billion came from oil, with non-oil sectors
              contributing SR118 billion. Despite efforts to boost non-oil
              income, the Kingdom recorded a cumulative deficit of SR58 billion
              for the first nine months, with revenues at SR956 billion and
              expenditures over SR1 trillion. Public debt rose to around SR1.158
              trillion by the end of September. <br />
              <br /> In the first half of the year, Saudi Arabia collected SR647
              billion in revenues and spent SR674 billion, resulting in a
              deficit of SR28 billion. During this period, oil revenues reached
              SR395 billion, up 10% from the previous year, while non-oil
              revenues were at SR252 billion, marking a 6% rise. <br />
              <br /> Growth Prospects and Economic Projections <br />
              <br />
              Saudi Arabias economy is expected to grow by 4.4% in 2024, with
              further expansion of 5.7% anticipated for 2025 and 5.1% for 2026.
              The Ministry of Finance projects a slight decrease in inflation,
              with rates expected to decline from 2.6% in 2023 to 2.2% in 2024,
              falling below 2% by 2026. <br /> <br /> In 2025, Saudi Arabia
              plans to spend SR1,285 billion, with projected revenues of SR1,184
              billion, resulting in a forecasted deficit of 2.3% of GDP. Real
              GDP is expected to grow by 0.8% in 2024 and a more robust 4.6% in
              2025, driven by continued investment in oil and non-oil sectors.{" "}
              <br /> <br /> Saudi Arabia is progressing steadily in economic
              diversification, yet managing spending and public debt remains
              critical. As the Kingdom of Saudi Arabia pursues Vision 2030,
              balancing ambitious projects with careful financial management
              will be essential to achieving long-term stability and resilience
              in the global economy.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center text-center gap-6 md:gap-[35px]">
            <h1 className="text-[16px] md:text-[20px] font-bold">
              Continue to other stories
            </h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-11">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex flex-col gap-4 md:gap-[30px]">
                  <div className="h-[160px] md:h-[247px] bg-[#D9D9D9] rounded-[20px]"></div>
                  <div className="flex flex-col gap-2 md:gap-[20px] text-left">
                    <h1 className="font-semibold text-[14px] md:text-[19px]">
                      Saudi Arabia’s Economic Update: Non-Oil Revenues Rise 6%
                      Amid SR30 Billion Q3 Deficit
                    </h1>
                    <p className="text-[12px] md:text-[16px]">
                      Saudi Arabia’s Ministry of Finance has released its latest
                      financial report, showing steady growth in non-oil revenues...
                      <span className="text-[#47BCCB]">Read More...</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default BlogInnerView;
