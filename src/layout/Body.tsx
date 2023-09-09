import Slideshow from "../components/Slideshow";
import Movies from "../components/Movies";

function Body() {
  return (
    <div className="bg-black">
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
