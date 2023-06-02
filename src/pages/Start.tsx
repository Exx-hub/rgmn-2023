import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Workout } from "../types/types";
import useTimer from "../hooks/useTimer";
import CircleTimer from "../components/CircleTimer";

import { FiPlay } from "react-icons/fi";
import { TbPlayerStop, TbPlayerPause } from "react-icons/tb";
import { BiReset } from "react-icons/bi";

function Start() {
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const workouts: Workout[] = location.state.workouts;

  const currentWorkout = workouts[workoutIndex];

  // console.log(workouts);

  const { secondsTimer, circlePercentageTimer, startTimer, stopTimer, resetTimer, isPaused } =
    useTimer(currentWorkout.duration, workoutIndex);

  const handlePrevNext = useCallback(
    (type: string) => {
      resetTimer();

      if (type === "prev") {
        if (workoutIndex !== 0) {
          setWorkoutIndex((p) => p - 1);
        }
      } else {
        if (workoutIndex < workouts.length - 1) {
          setWorkoutIndex((p) => p + 1);
        } else {
          navigate("/complete");
        }
      }
    },
    [resetTimer, workoutIndex, workouts.length, navigate]
  );

  useEffect(() => {
    if (secondsTimer < 1) {
      handlePrevNext("next");
    }
  }, [handlePrevNext, secondsTimer]);

  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-5">
      <div className="mb-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold uppercase">{currentWorkout.title}</h2>
        <p className="text-gray-500">
          {workoutIndex + 1} / {workouts.length}
        </p>
      </div>

      <CircleTimer
        circlePercentageTimer={circlePercentageTimer}
        imageSrc={currentWorkout.imageUrl}
        handlePrevNext={handlePrevNext}
      />
      <p className="text-4xl font-bold text-[silver]">{secondsTimer}s</p>

      <div className="flex space-x-5 text-3xl text-gray-500">
        <button onClick={() => navigate("/create")} className="timer-controls">
          <TbPlayerStop />
        </button>
        <button
          onClick={resetTimer}
          disabled={!isPaused}
          className={isPaused ? "timer-controls cursor-pointer" : "cursor-not-allowed"}
        >
          <BiReset />
        </button>

        {!isPaused && (
          <button onClick={stopTimer} className="timer-controls">
            <TbPlayerPause />
          </button>
        )}

        {isPaused && (
          <button onClick={startTimer} className="timer-controls">
            <FiPlay />
          </button>
        )}
      </div>
    </div>
  );
}

export default Start;
