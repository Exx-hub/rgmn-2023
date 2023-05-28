import whiteLogo from "../assets/whiteLogo.svg";
import ImageOverlap from "./ImageOverlap";
// import blackLogo from "../assets/blackLogo.svg";

import { FaDumbbell, FaArrowRight } from "react-icons/fa";

function Landing() {
  return (
    <div className="relative w-[70%] h-screen mx-auto flex flex-col">
      <div className="w-[115px] mt-6 ml-10">
        <img src={whiteLogo} alt="" />
      </div>
      {/* <div className="w-[100px] bg-[white]">
        <img src={blackLogo} alt="" />
      </div> */}

      <div className="my-auto relative pl-10 -translate-y-12">
        <div className="max-w-[600px]">
          <h2 className="text-3xl font-bold">
            Unlock your hidden strengths and reach full potential with RGMN /&apos;re.gi.men/.
          </h2>
        </div>

        <div className="text-gray-500 max-w-[500px] mt-3">
          <p>
            Improve overall fitness, develop a well-rounded skill set, prevent injuries and greatly
            enhance performance in primary sport.
          </p>
          <p>Start your RGMN today!</p>
        </div>

        <div className="flex space-x-3 mt-5">
          <button className="cta-btn bg-white text-black">
            <FaDumbbell /> <span>Get Started</span>
          </button>
          <button className="cta-btn">
            <span>Continue Workout</span> <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="absolute top-60 right-20">
        <ImageOverlap />
      </div>
    </div>
  );
}

export default Landing;
