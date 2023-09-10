import Slideshow from "../components/Slideshow";
import Movies from "../components/Movies";

function Body() {
  return (
    <div className="bg-black lg:px-10">
      <div className="">
        <Slideshow />
      </div>
      <div>
        <Movies />
      </div>
    </div>
  );
}

export default Body;
