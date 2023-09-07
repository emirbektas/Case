import firstSlide from "../assets/1.jpg";
import secondSlide from "../assets/2.jpg";
import thirdSlide from "../assets/3.jpg";
import { Carousel } from "flowbite-react";

function Slideshow() {
  return (
    <div>
      <Carousel className="">
        <div className="flex h-full items-center justify-center relative">
          <img src={firstSlide} className="w-full h-[200px] lg:h-full " />
        </div>
        <div className="flex h-full items-center justify-center relative">
          <img src={secondSlide} className="w-full h-[200px] lg:h-full " />
        </div>
        <div className="flex h-full items-center justify-center relative">
          <img src={thirdSlide} className="w-full h-[200px] lg:h-full " />
        </div>
      </Carousel>
    </div>
  );
}

export default Slideshow;
