import Slideshow from "../components/Slideshow";
import Movies from "../components/Movies";
// import Categories from "../components/Categories";

function Body() {
  return (
    <div className="mb-20 border-2 border-red-500">
      <div className="">
        <Slideshow />
      </div>
      <div>{/* <Categories /> */}</div>
      <div>
        <Movies />
      </div>
    </div>
  );
}

export default Body;
