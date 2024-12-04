import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { blogData } from "../assets/Blogdata.js";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer.jsx";

function Blog() {
  const [articles, setArticles] = useState([]);
  const [popular, setPopular] = useState([]);
  const nav = useNavigate()

  useEffect(() => {
    setArticles(blogData.articles);
    setPopular(blogData.popular);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-[81px] mx-4 md:mx-[60px] bg-white p-4 md:p-12 rounded-[20px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Articles Section */}
          <div className="col-span-3 md:col-span-2 border-2 border-[#D9D9D9] p-4 md:p-[40px] rounded-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[51px]">
              {articles.map((article, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-[20px] ${
                    index === 0 ? "sm:col-span-2" : "sm:col-span-1"
                  }`}
                  onClick={()=>nav("/Blog/View")}
                >
                  <div
                    className="bg-slate-300 h-[200px] sm:h-[247px] rounded-[20px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  ></div>
                  <h className="font-bold text-lg sm:text-xl">{article.title}</h>
                  <p className="text-sm sm:text-base">{article.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Section */}
          <div className="col-span-3 md:col-start-3 flex flex-col">
            <div className="border-2 p-4 md:p-[40px] border-[#D9D9D9] rounded-[20px] flex flex-col gap-6">
              <h1 className="font-bold text-xl md:text-[30px]">Popular</h1>
              {popular.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div
                    className="bg-slate-300 h-[120px] md:h-[160px] rounded-[20px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="text-sm sm:text-base">{item.description}</div>
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

export default Blog;
