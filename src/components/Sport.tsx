import SectionTitle from "./SectionTitle";

import boxer from "../assets/sport/boxer.jpg";
import bodybuilding from "../assets/sport/bodybuilding.jpg";
import crossfit from "../assets/sport/crossfit.jpg";
import fitness from "../assets/sport/fitness.jpg";
import mma from "../assets/sport/mma.jpg";
import stronglift from "../assets/sport/stronglift.jpg";

import ImageCard from "./ImageCard";

interface Sport {
  id: number;
  name: string;
  image: string;
}

function Sport() {
  const sports: Sport[] = [
    {
      id: 1,
      name: "boxing",
      image: boxer,
    },
    {
      id: 2,
      name: "crossfit",
      image: crossfit,
    },
    {
      id: 3,
      name: "mma",
      image: mma,
    },
    {
      id: 4,
      name: "powerlifting",
      image: stronglift,
    },
    {
      id: 5,
      name: "fitness",
      image: fitness,
    },
    {
      id: 6,
      name: "bodybuilding",
      image: bodybuilding,
    },
  ];
  return (
    <div className="p-10 min-w-[350px] lg:h-screen max-w-[90%] mx-auto flex flex-col justify-center items-center">
      <SectionTitle title="Choose sport focus" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        {sports.map((sport) => (
          <ImageCard image={sport.image} name={sport.name} key={sport.id} />
        ))}
      </div>
    </div>
  );
}

export default Sport;
