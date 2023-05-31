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
    <div className="mx-auto flex w-[90%] max-w-[1250px] flex-col justify-evenly p-10 md:h-screen">
      <SectionTitle title="How does RGMN work?" />
      <div className="mt-16 flex  flex-col space-y-5 md:flex-row md:space-y-0 lg:mt-0">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-start space-y-2 text-start">
            <div className="mb-5 rounded bg-[#333] p-5 text-2xl">{step.icon}</div>
            <div className="text-xl font-extrabold">{step.title}</div>
            <div className="w-[90%] font-light text-gray-400">{step.description}</div>
          </div>
        ))}
      </div>

      <button
        className="cta-btn my-10 w-[200px] self-center bg-white text-black lg:mx-0"
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
