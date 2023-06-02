import confetti from "canvas-confetti";
import { useEffect } from "react";

import { CiCircleCheck } from "react-icons/ci";
import { FaDumbbell, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Complete() {
  useEffect(() => {
    confetti({
      particleCount: 50,
      spread: 100,
      origin: { y: 0.6 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.6 },
      });
    }, 1000);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn relative mx-auto flex h-screen w-[90%] max-w-[1250px] flex-col items-center justify-center ">
      <div className="animate__animated animate__bounceIn animate__repeat-2 text-5xl lg:text-7xl">
        <CiCircleCheck />
      </div>
      <h2 className="animate__animated animate__heartBeat text-3xl lg:text-6xl">
        AWESOME! YOU DID IT!
      </h2>

      <div className="mt-3 flex space-x-3">
        <Link
          to="/create"
          className="cta-btn text-black"
          style={{
            backgroundColor: "#b8c6db",
            backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
          }}
        >
          <FaDumbbell /> <span>Run it back</span>
        </Link>
        <Link to="/" className="cta-btn">
          <span>Go to Home</span> <FaArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default Complete;
