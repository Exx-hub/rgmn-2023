import { useLocation } from "react-router-dom";
import useGetWorkouts from "../hooks/useGetWorkouts";
import WorkoutCard from "../components/WorkoutCard";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

export interface Workout {
  id?: number;
  title?: string;
  imageUrl: string;
  duration: number;
}

function Workout() {
  const location = useLocation();
  const { sport, level } = location.state;

  const { workouts } = useGetWorkouts(sport, level);

  console.log({ workouts });

  return (
    <div className="animate__animated animate__fadeIn relative mx-auto min-w-[320px] max-w-[90%] py-20 md:max-w-[675px]">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold capitalize italic">{sport} cross training</h2>
        <p className="font-light capitalize text-gray-400">{level}</p>
      </div>
      <div className="flex flex-col space-y-4">
        {workouts.map((workout, index) => (
          <WorkoutCard key={workout.id} workout={workout} index={index} />
        ))}
      </div>
      <div className="fixed bottom-0 left-2/4 flex h-[120px] w-[675px] -translate-x-2/4 bg-gradient-to-t from-[#101010]/[.75] to-transparent 2xl:bg-none">
        <button className="relative mx-auto flex  h-[55px] w-[150px] items-center justify-center self-center rounded-md px-4 py-3 font-bold text-black md:h-[60px] md:w-[200px] 2xl:self-start">
          <div className="absolute inset-0 -z-20 -skew-x-[30deg] rounded-lg bg-white"></div>
          START
          <span>
            <HiOutlineChevronDoubleRight className="ml-2 text-xl opacity-30" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Workout;
