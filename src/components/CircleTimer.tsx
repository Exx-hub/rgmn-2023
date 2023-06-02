import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface CircleTimerProps {
  circlePercentageTimer: number;
  imageSrc: string;
  handlePrevNext: (type: string) => void;
}

function CircleTimer({ circlePercentageTimer, imageSrc, handlePrevNext }: CircleTimerProps) {
  return (
    <div className="flex space-x-3">
      <button onClick={() => handlePrevNext("prev")}>
        <BsChevronLeft />
      </button>

      <div className="relative h-60 w-60 lg:h-80 lg:w-80">
        <div
          style={{
            backgroundImage: `conic-gradient(${"silver"} ${circlePercentageTimer}%, transparent 0%)`,
          }}
          className="h-full w-full rounded-full"
        >
          {/* BLACK CIRCLE BORDER OVER TIMER CIRCLE TO COVER INNER PART ADN JUST SHOW RED LINE CIRCLE FOR TIMER  */}
          <div className="absolute left-1/2 top-1/2 z-[99] h-[90%] w-[90%] -translate-x-2/4 -translate-y-2/4 rounded-full bg-black"></div>

          <div className="absolute left-1/2 top-1/2 z-[100] h-[80%] w-[80%] -translate-x-2/4 -translate-y-2/4 overflow-hidden rounded-full">
            <img src={imageSrc} alt="jumping" className="h-full w-full" />
          </div>
        </div>
      </div>

      <button onClick={() => handlePrevNext("next")}>
        <BsChevronRight />
      </button>
    </div>
  );
}

export default CircleTimer;
