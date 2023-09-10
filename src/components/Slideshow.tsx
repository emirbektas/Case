import firstSlide from "../assets/1.jpg";
import secondSlide from "../assets/2.jpg";
import thirdSlide from "../assets/3.jpg";
import { Carousel } from "flowbite-react";
import "../App.css";

function Slideshow() {
  return (
    <div className="xl:mx-32">
      <Carousel>
        <div className="flex h-full items-center justify-center relative">
          <img
            src={firstSlide}
            className="w-full object-cover h-auto md:h-[360px] lg:h-96 xl:h-[500px]"
          />
        </div>
        <div className="flex h-full items-center justify-center relative">
          <img
            src={secondSlide}
            className="w-full object-cover h-auto md:h-[360px] lg:h-96 xl:h-[500px]"
          />
        </div>
        <div className="flex h-full items-center justify-center relative">
          <img
            src={thirdSlide}
            className="w-full object-cover h-auto md:h-[360px] lg:h-96 xl:h-[500px]"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slideshow;
