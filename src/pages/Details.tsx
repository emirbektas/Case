import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineStar, AiOutlinePlus } from "react-icons/ai";
import { BsCalendar2Date, BsFillPlayFill } from "react-icons/bs";

const Details = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

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
        className="absolute w-full h-full opacity-50 object-cover"
      />
      <div className="px-2 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-2xl font-bold mb-5">{movie.title}</h1>
        <div className="flex gap-3 mb-5">
          <div className="flex">
            <AiOutlineStar className="my-auto mr-2 text-yellow-300" /> IMBD:{" "}
            {Math.floor(movie.vote_average)}
          </div>
          <div className="flex">
            <BsCalendar2Date className="my-auto mr-2 text-yellow-300" /> RELEASE
            DATE: {movie.release_date}
          </div>
        </div>
        <p>{movie.overview}</p>
        <div className="flex gap-4 mt-5">
          <button className="cursor-pointer flex p-2 bg-yellow-300 rounded-3xl text-black text-sm">
            <BsFillPlayFill className="my-auto mr-1" /> WATCH TRAILER
          </button>
          <button className="cursor-pointer flex p-2 bg-white rounded-3xl text-black text-sm">
            <AiOutlinePlus className="my-auto mr-1" /> ADD LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
