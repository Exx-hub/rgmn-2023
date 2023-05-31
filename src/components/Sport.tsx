import SectionTitle from "./SectionTitle";

import boxer from "../assets/sport/boxer.jpg";
import bodybuilding from "../assets/sport/bodybuilding.jpg";
import crossfit from "../assets/sport/crossfit.jpg";
import fitness from "../assets/sport/fitness.jpg";
import mma from "../assets/sport/mma.jpg";
import stronglift from "../assets/sport/stronglift.jpg";

import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";

import { FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";

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
    <div className="mx-auto flex min-w-[350px] max-w-[90%] flex-col items-center justify-center p-10 lg:h-screen">
      <SectionTitle title="Choose sport focus" />

      <div className="mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sports.map((sport) => (
          <ImageCard image={sport.image} name={sport.name} key={sport.id} />
        ))}
      </div>

      <Link
        to="/"
        className="mt-10 flex items-center self-start rounded-md bg-[#4d4c4b]/[.50] p-2 hover:bg-[#4d4c4b]/[.40]"
      >
        <FaArrowLeft />
        <span className="ml-1">Back</span>
      </Link>
    </div>
  );
}

export default Sport;
