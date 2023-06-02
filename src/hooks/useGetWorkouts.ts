import { useEffect, useState } from "react";
import { allExerciseList, exerciseSets } from "../data/data";
import { Workout } from "../types/types";

type Level = "beginner" | "competitive" | "pro";
type Sport = "boxing";

const useGetWorkouts = (sport: Sport, level: Level) => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    const exerciseSet = exerciseSets[sport][level];

    const workoutList = exerciseSet.map((item) => {
      const [exerciseName, duration] = item as [string, number];

      const exercise = allExerciseList.find((e) => e.image.includes(exerciseName));

      const imageUrl = `https://res.cloudinary.com/dmcl7ol1o/image/upload/${exercise?.image}`;

      return { id: exercise?.id, title: exercise?.title, imageUrl, duration };
    });
    setWorkouts(workoutList);
  }, [level, sport]);

  return { workouts };
};

export default useGetWorkouts;
