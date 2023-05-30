import HowItWorks from "../components/HowItWorks";
import Landing from "../components/Landing";

function HomePage() {
  return (
    <div className="animate__animated animate__fadeIn w-full">
      <Landing />
      <HowItWorks />
    </div>
  );
}

export default HomePage;
