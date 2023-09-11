import { Link } from "react-router-dom";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

interface CardProps {
  movie: Movie;
}

function Card({ movie }: CardProps) {
  return (
    <Link to={`/details/${movie.id}`}>
      <div className="">
        <img
          src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
          alt="Movie Poster"
          className="rounded-md h-52 mx-auto md:h-72 lg:h-80"
        />
        <div className="text-center text-white sm:mx-auto mt-4">
          {movie.title}
        </div>
      </div>
    </Link>
  );
}

export default Card;
