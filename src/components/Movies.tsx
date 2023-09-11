import { useState, useEffect } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const genres = [
    { value: "", label: "All" },
    { value: "28", label: "Action" },
    { value: "35", label: "Comedy" },
    { value: "27", label: "Horror" },
    { value: "878", label: "Sci-Fi" },
    { value: "18", label: "Drama" },
    { value: "9648", label: "Mystery" },
    { value: "10749", label: "Romance" },
    { value: "10402", label: "Musical" },
  ];

  const getMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=2718329d450e46aabda8f0221fe92a73`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setFilteredMovies(json.results);
      })
      .catch((err) => console.log(err));
  };

  const filterMoviesByGenre = (genreValue) => {
    if (genreValue === "") {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(parseInt(genreValue))
      );
      setFilteredMovies(filtered);
    }
    setSelectedGenre(genreValue);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="px-4 md:mx-10">
      <div className=" flex justify-center">
        <div className="my-10 flex wrapper overflow-x-auto">
          {genres.map((genre) => (
            <button
              key={genre.value}
              value={genre.value}
              onMouseUp={() => filterMoviesByGenre(genre.value)}
              className="focus:bg-purple-950 category text-white bg-gray-800 rounded-xl px-6 mx-2 lg:px-8 xl:px-8 2xl:px-8 2xl:py-4"
            >
              {genre.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-10 grid grid-cols-3 gap-3 xl:grid-cols-4 2xl:grid-cols-5">
        {filteredMovies.map((movie) => (
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <Card movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Movies;
