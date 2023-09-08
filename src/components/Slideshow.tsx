import firstSlide from "../assets/1.jpg";
import secondSlide from "../assets/2.jpg";
import thirdSlide from "../assets/3.jpg";
import { Carousel } from "flowbite-react";
import "../App.css";

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

      <div className="my-20 border border-red-500">
        <div className="wrapper flex overflow-x-auto">
          <button className="category bg-red-500 p-4 m-2">Action</button>
          <button className="category bg-red-500 p-4 m-2">Comedy</button>
          <button className="category bg-red-500 p-4 m-2">Horror</button>
          <button className="category bg-red-500 p-4 m-2">Sci-Fi</button>
          <button className="category bg-red-500 p-4 m-2">Drama</button>
          <button className="category bg-red-500 p-4 m-2">Mystery</button>
          <button className="category bg-red-500 p-4 m-2">Romance</button>
          <button className="category bg-red-500 p-4 m-2">Musical</button>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
