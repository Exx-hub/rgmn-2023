import { useCallback, useEffect, useRef, useState } from "react";

const useTimer = (duration: number, workoutIndex: number) => {
  const [secondsTimer, setSecondsTimer] = useState<number>(duration);
  const secondsIntervalRef = useRef<number | undefined>(undefined);

  const [circlePercentageTimer, setCirclePercentageTimer] = useState<number>(100);
  const circleIntervalRef = useRef<number | undefined>(undefined);

  const [isPaused, setIsPaused] = useState(false);

  const startTimer = useCallback(() => {
    setIsPaused(false);

    const margin = 100 / duration;
    secondsIntervalRef.current = setInterval(() => {
      setSecondsTimer((prev) => {
        if (prev === 0) {
          clearInterval(secondsIntervalRef.current);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    circleIntervalRef.current = setInterval(() => {
      setCirclePercentageTimer((prev) => {
        if (prev < 1) {
          clearInterval(circleIntervalRef.current);
          return 0;
        }

        // return prev - margin --- for less smooth circle timer animation, also setInterval 1000
        return prev - margin / 100;
      });
    }, 10);
  }, [duration]);

  const stopTimer = () => {
    clearInterval(secondsIntervalRef.current);
    clearInterval(circleIntervalRef.current);

    setIsPaused(true);
  };

  const resetTimer = () => {
    clearInterval(secondsIntervalRef.current);
    clearInterval(circleIntervalRef.current);
    setSecondsTimer(duration);
    setCirclePercentageTimer(100);
  };

  // make timer start automatically
  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  }, [startTimer, workoutIndex]);

  return { secondsTimer, circlePercentageTimer, startTimer, stopTimer, resetTimer, isPaused };
};

export default useTimer;
