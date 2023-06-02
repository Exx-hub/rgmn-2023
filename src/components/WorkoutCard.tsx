import { Workout } from "../types/types";

interface WorkoutCardProps {
  workout: Workout;
  index: number;
}

function WorkoutCard({ workout, index }: WorkoutCardProps) {
  return (
    <div className="animate__fadeIn animate__animated animate__delay-1s relative flex rounded-lg bg-[#232323]">
      <div className="aspect-square max-w-[118px]">
        <img
          src={workout.imageUrl}
          alt={workout.title}
          className="pointer-events-none h-full w-full rounded-l-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold">{workout.title}</h2>
        <p className="text-lg font-semibold italic text-gray-400">{workout.duration}s</p>
      </div>
      <p className="ml-auto mr-5 self-center text-4xl font-bold text-[#4d4c4b]/[.5] lg:text-6xl">
        {index + 1}
      </p>
    </div>
  );
}

export default WorkoutCard;
