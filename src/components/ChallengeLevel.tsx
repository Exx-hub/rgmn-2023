import SectionTitle from "./SectionTitle";

import beginner from "../assets/challenge/beginner.jpg";
import competitive from "../assets/challenge/competitive.jpg";
import pro from "../assets/challenge/pro.jpg";
import ImageCard from "./ImageCard";

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
    <div className="py-10 md:p-10 min-w-[350px] max-w-[90%] mx-auto lg:h-screen flex flex-col justify-center items-center">
      <SectionTitle title="Select challenge level" />

      <div className="flex md:grid md:grid-cols-3 gap-4 mt-16 md:max-h-96">
        {levels.map((level) => (
          <ImageCard image={level.image} name={level.name} key={level.id} />
        ))}
      </div>
    </div>
  );
}

export default ChallengeLevel;
