import one from "../assets/overlap/1.jpg";
import two from "../assets/overlap/2.jpg";
import three from "../assets/overlap/3.jpg";
import four from "../assets/overlap/4.jpg";

function ImageOverlap() {
  return (
    <div className="relative w-[500px] h-[400px] bg-black overflow-hidden rounded-md">
      <img src={one} alt="" className="overlap-image top-0 -left-12" />
      <img
        src={two}
        alt=""
        className="overlap-image -translate-x-[55%] -translate-y-2/4 left-2/4 top-2/4"
      />
      <img src={three} alt="" className="overlap-image top-0 -right-8" />
      <img src={four} alt="" className="overlap-image bottom-0 right-0" />
    </div>
  );
}

export default ImageOverlap;
