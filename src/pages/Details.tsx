import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineStar, AiOutlinePlus } from "react-icons/ai";
import { BsCalendar2Date, BsFillPlayFill } from "react-icons/bs";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  overview: string;
}

const Details: React.FC = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=2718329d450e46aabda8f0221fe92a73`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.error("Error: ", error));
  }, [movieId]);

  if (!movie) {
    return <div>Film bulunamadi.</div>;
  }

  return (
    <div>
      <img
        src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie Poster"
        className="absolute w-full h-full opacity-50 object-cover lg:hidden"
      />
      <div className="px-2 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center lg:bg-black lg:fixed">
        <div className="flex flex-col items-center lg:flex-row lg:mx-20 xl:mx-32 2xl:mx-52">
          <div>
            <img
              src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
              alt="Movie Poster"
              className="hidden lg:block w-[1000px]"
            />
          </div>
          <div>
            <div className="lg:flex flex-col items-center">
              <h1 className="text-2xl font-bold mb-5 drop-shadow-glow md:text-3xl lg:text-4xl">
                {movie.title}
              </h1>
              <div className="flex justify-center gap-3 mb-5 lg:text-xl lg:gap-10 ">
                <div className="flex ">
                  <AiOutlineStar className="my-auto mr-2 text-yellow-300" />{" "}
                  IMBD: {Math.floor(movie.vote_average)}
                </div>
                <div className="flex">
                  <BsCalendar2Date className="my-auto mr-2 text-yellow-300" />{" "}
                  RELEASE DATE: {movie.release_date}
                </div>
              </div>
              <p className="md:text-lg md:px-5 lg:text-xl xl:px-10">
                {movie.overview}
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-5">
              <button className="cursor-pointer flex p-2 md:p-3 bg-yellow-300 rounded-3xl text-black text-sm">
                <BsFillPlayFill className="my-auto mr-1" /> WATCH TRAILER
              </button>
              <button className="cursor-pointer flex p-2 md:p-3 bg-white rounded-3xl text-black text-sm">
                <AiOutlinePlus className="my-auto mr-1" /> ADD LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
