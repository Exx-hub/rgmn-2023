import { useNavigate } from "react-router-dom";
import whiteLogo from "../assets/whiteLogo.svg";
import ImageOverlap from "./ImageOverlap";

import { FaDumbbell, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

interface SavedWorkout {
  sport: string;
  level: string;
}

function Landing() {
  const [savedWorkout, setSavedWorkout] = useState<SavedWorkout | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSavedWorkout(JSON.parse(localStorage.getItem("rgmn") as string));
  }, []);

  const handleContinue = () => {
    if (savedWorkout) {
      navigate("/workouts", {
        state: { sport: savedWorkout?.sport, level: savedWorkout?.level },
      });
    } else {
      navigate("/create");
    }
  };

  return (
    <div className="relative mx-auto flex h-screen w-full max-w-[1250px] flex-col overflow-hidden bg-mobile bg-cover bg-center bg-no-repeat px-6 lg:bg-none lg:px-0">
      <div className="animate__animated animate__bounce animate__delay-1s animate__repeat-2 z-10 mt-3 w-[115px] md:ml-10 md:mt-6">
        <img src={whiteLogo} alt="" />
      </div>

      <div className="relative z-10 my-auto -translate-y-12 md:pl-10">
        <div className="animate__animated animate__fadeInUp animate__delay-1s max-w-[600px]">
          <h2 className="text-3xl font-bold leading-tight lg:text-4xl">
            Unlock your hidden strengths and reach your full potential with{" "}
            <span
              className="rounded-sm bg-white text-black"
              style={{
                backgroundColor: "#b8c6db",
                backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
              }}
            >
              RGMN
            </span>
            /&apos;re.gi.men/.
          </h2>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s mt-3 max-w-[500px] text-gray-400">
          <p>
            Improve overall fitness, develop a well-rounded skill set, prevent injuries and greatly
            enhance performance in primary sport.
          </p>
          <p>Start your RGMN today!</p>
        </div>

        <div className="mt-5 flex flex-col space-y-2 md:flex-row md:items-center md:space-x-3 md:space-y-1">
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
          <button className="cta-btn -translate-y-[2px]" onClick={handleContinue}>
            <span>Continue Workout</span> <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 z-0 bg-[#101010] opacity-60 xl:opacity-0"></div>

      <div className="animate__animated animate__fadeInRight animate__delay-1s absolute right-20 top-40 hidden lg:block xl:top-52 2xl:top-64">
        <ImageOverlap />
      </div>
    </div>
  );
}

export default Landing;
