import { RxCursorArrow } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";
import { FaDumbbell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle";

function HowItWorks() {
  const navigate = useNavigate();
  const steps = [
    {
      id: 1,
      icon: <RxCursorArrow />,
      title: "Select workout & challenge level",
      description: "Choose desired cross-training workout and select appropriate level of fitness.",
    },
    {
      id: 2,
      icon: <AiOutlineMenu />,
      title: "Generate Cross-Training workout",
      description: "RGMN generates a cross-training workout for you based on selected options.",
    },
    {
      id: 3,
      icon: <BiDumbbell />,
      title: "Start Cross-Training workout",
      description: "Start interval training, do exercises one at a time based on timer or reps.",
    },
  ];

  return (
    <div className="flex flex-col justify-evenly p-10 md:h-screen mx-auto w-[90%] max-w-[1250px]">
      <SectionTitle title="How does RGMN work?" />
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col space-y-2 items-start text-start">
            <div className="bg-[#333] p-5 rounded text-2xl mb-5">{step.icon}</div>
            <div className="font-extrabold text-xl">{step.title}</div>
            <div className="text-gray-400 font-light w-[90%]">{step.description}</div>
          </div>
        ))}
      </div>

      <button
        className="cta-btn bg-white text-black w-[200px] self-center my-10 lg:mx-0"
        onClick={() => navigate("/create")}
        style={{
          backgroundColor: "#b8c6db",
          backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)",
        }}
      >
        <FaDumbbell /> <span>Get Started</span>
      </button>
    </div>
  );
}

export default HowItWorks;
