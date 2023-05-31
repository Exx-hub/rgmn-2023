import { useEffect, useState } from "react";
import { exerciseSets } from "../data/data";

type Level = "beginner" | "competitive" | "pro";
type Sport = "boxing";

const useGetWorkouts = (sport: Sport, level: Level) => {
  const [workouts, setWorkouts] = useState<(string | number)[][]>([]);

  useEffect(() => {
    setWorkouts(exerciseSets[sport][level]);
  }, [level, sport]);

  return { workouts };
};

export default useGetWorkouts;
