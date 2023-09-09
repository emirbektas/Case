import React from "react";
import { Link } from "react-router-dom";

function Card({ movie }) {
  return (
    <Link to={`/details/${movie.id}`}>
      <div>
        <img
          src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
          alt="Movie Poster"
          className="rounded-md h-[175px]"
        />
        <div className="text-center text-white">{movie.title}</div>
      </div>
    </Link>
  );
}

export default Card;
