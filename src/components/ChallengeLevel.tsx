import SectionTitle from "./SectionTitle";

import beginner from "../assets/challenge/beginner.jpg";
import competitive from "../assets/challenge/competitive.jpg";
import pro from "../assets/challenge/pro.jpg";
import ImageCard from "./ImageCard";

interface ChallengeLevelProps {
  sport: string;
  setLevel: React.Dispatch<React.SetStateAction<string>>;
}

interface Level {
  id: number;
  name: string;
  image: string;
}

function ChallengeLevel({ sport, setLevel }: ChallengeLevelProps) {
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

  const handleClick = (name: string) => {
    if (sport) {
      setLevel(name);
    } else {
      alert("please select sport first.");
    }
  };

  return (
    <div
      id="level"
      className="mx-auto flex h-screen min-w-[350px] max-w-[850px] flex-col items-center justify-evenly py-10  md:p-10"
    >
      <SectionTitle title="Select challenge level" />

      <div className="flex gap-2 md:grid md:max-h-96 md:grid-cols-3 md:gap-4 lg:my-0">
        {levels.map((level) => (
          <div key={level.id} className="h-[350px]" onClick={() => handleClick(level.name)}>
            <ImageCard image={level.image} name={level.name} key={level.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChallengeLevel;
