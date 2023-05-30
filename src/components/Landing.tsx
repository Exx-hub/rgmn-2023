import { useNavigate } from "react-router-dom";
import whiteLogo from "../assets/whiteLogo.svg";
import ImageOverlap from "./ImageOverlap";

import { FaDumbbell, FaArrowRight } from "react-icons/fa";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-[1250px] mx-auto px-6 lg:px-0 relative h-screen flex flex-col overflow-hidden bg-mobile bg-cover bg-center bg-no-repeat lg:bg-none -z-20">
      <div className="w-[115px] mt-3 md:mt-6 md:ml-10 animate__animated animate__bounce animate__delay-1s animate__repeat-2">
        <img src={whiteLogo} alt="" />
      </div>

      <div className="my-auto relative md:pl-10 -translate-y-12">
        <div className="max-w-[600px] animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
            Unlock your hidden strengths and reach your full potential with{" "}
            <span
              className="bg-white text-black rounded-sm"
              style={{
                backgroundColor: "#b8c6db",
                backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
              }}
            >
              RGMN
            </span>{" "}
            /&apos;re.gi.men/.
          </h2>
        </div>

        <div className="text-gray-400 max-w-[500px] mt-3 animate__animated animate__fadeInUp animate__delay-1s">
          <p>
            Improve overall fitness, develop a well-rounded skill set, prevent injuries and greatly
            enhance performance in primary sport.
          </p>
          <p>Start your RGMN today!</p>
        </div>

        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3 mt-5">
          <button
            className="cta-btn bg-white text-black"
            onClick={() => navigate("/create")}
            style={{
              backgroundColor: "#b8c6db",
              backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
            }}
          >
            <FaDumbbell /> <span>Get Started</span>
          </button>
          <button className="cta-btn">
            <span>Continue Workout</span> <FaArrowRight />
            {/* create workout if localstorage has no workout data  */}
          </button>
        </div>
      </div>

      <div className="absolute inset-0 bg-[#101010] opacity-60 xl:opacity-0 -z-20"></div>

      <div className="absolute hidden lg:block top-40 xl:top-52 2xl:top-64 right-20 -z-30 animate__animated animate__fadeInRight animate__delay-1s">
        <ImageOverlap />
      </div>
    </div>
  );
}

export default Landing;
