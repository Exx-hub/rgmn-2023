import { useEffect } from "react";
import ChallengeLevel from "../components/ChallengeLevel";
import Sport from "../components/Sport";

function GenerateWorkout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn mx-auto w-[90%] max-w-[1250px]">
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
