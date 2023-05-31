import SectionTitle from "./SectionTitle";

import beginner from "../assets/challenge/beginner.jpg";
import competitive from "../assets/challenge/competitive.jpg";
import pro from "../assets/challenge/pro.jpg";
import ImageCard from "./ImageCard";

import { HiOutlineChevronDoubleRight } from "react-icons/hi";

interface Level {
  id: number;
  name: string;
  image: string;
}

function ChallengeLevel() {
  const levels: Level[] = [
    {
      id: 1,
      name: "beginner",
      image: beginner,
    },
    {
      id: 2,
      name: "competitive",
      image: competitive,
    },
    {
      id: 3,
      name: "pro",
      image: pro,
    },
  ];
  return (
    <div
      id="level"
      className="mx-auto flex h-screen min-w-[350px] max-w-[90%] flex-col items-center justify-evenly py-10  md:p-10"
    >
      <SectionTitle title="Select challenge level" />

      <div className="flex gap-4 md:grid md:max-h-96 md:grid-cols-3 lg:my-0">
        {levels.map((level) => (
          <ImageCard image={level.image} name={level.name} key={level.id} />
        ))}
      </div>

      <button className="relative mx-auto mb-10  flex h-[55px] w-[150px] items-center justify-center rounded-md px-4 py-3 font-bold text-black transition-transform hover:scale-105 md:h-[60px] md:w-[200px] lg:mb-0">
        <div
          className="absolute inset-0 -z-20 -skew-x-[30deg] rounded-lg bg-white"
          style={{
            backgroundColor: "#b8c6db",
            backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
          }}
        ></div>
        Get Started
        <span>
          <HiOutlineChevronDoubleRight className="ml-2 text-xl opacity-30" />
        </span>
      </button>
    </div>
  );
}

export default ChallengeLevel;
