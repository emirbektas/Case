import Slideshow from "../components/Slideshow";
import Movies from "../components/Movies";

function Body() {
  return (
    <div className="mb-20 border-2 border-red-500">
      <div className="">
        <Slideshow />
      </div>
      <div>Kategoriler</div>
      <div>
        <Movies />
      </div>
    </div>
  );
}

export default Body;
