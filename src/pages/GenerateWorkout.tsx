import { useEffect, useState } from "react";
import ChallengeLevel from "../components/ChallengeLevel";
import Sport from "../components/Sport";

import { useNavigate } from "react-router-dom";

function GenerateWorkout() {
  const [sport, setSport] = useState("");
  const [level, setLevel] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (sport && level) {
      localStorage.setItem("rgmn", JSON.stringify({ sport, level }));

      // if sport and level selected, route to workout and pass sport and level as state
      navigate("/workouts", { state: { sport, level } });
    }
  }, [sport, level, navigate]);

  return (
    <div className="animate__animated animate__fadeIn relative mx-auto w-[90%] max-w-[1250px]">
      <Sport setSport={setSport} />
      <ChallengeLevel sport={sport} setLevel={setLevel} />
    </div>
  );
}

export default GenerateWorkout;
