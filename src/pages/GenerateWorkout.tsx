import { useEffect } from "react";
import ChallengeLevel from "../components/ChallengeLevel";
import Sport from "../components/Sport";

function GenerateWorkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto w-[90%] max-w-[1250px] animate__animated animate__fadeIn">
      {/* choose sport focus */}
      <Sport />

      {/* select challenge level  */}
      <ChallengeLevel />

      {/* generate / start workout  */}
      {/* sends api call to fetch exercises with sport focus and challange level as params  */}
      {/* setup context for workouts   */}
    </div>
  );
}

export default GenerateWorkout;

/* <button className="mx-auto px-4 py-3 mt-10 rounded-md  text-black w-[150px] h-[55px] mb-10 lg:mb-0  md:w-[200px] md:h-[60px] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-white -z-20 -skew-x-[30deg] rounded-lg"></div>
        Get Started
        <span>
          <HiOutlineChevronDoubleRight className="ml-2 opacity-30 text-xl" />
        </span>
      </button> */
