import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useGetWorkouts from "../hooks/useGetWorkouts";

function Workout() {
  const location = useLocation();
  const { sport, level } = location.state;

  const { workouts } = useGetWorkouts(sport, level);

  console.log({ workouts });

  // useEffect
  useEffect(() => {
    // console.log(location.state);
    // fetch data on render? using state from location
    // to get workout based on selected sport and level
    // fetched data, to be saved in state, then displayed in cards.
    // once exercises are saved, start workout
    // may need to create context for workouts
  }, [location.state]);

  return (
    <div>
      <h2>{sport}</h2>
      <p>{level}</p>
    </div>
  );
}

export default Workout;
