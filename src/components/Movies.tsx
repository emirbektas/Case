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
    <>
      <div>
        <div className="my-10 flex wrapper overflow-x-auto">
          {genres.map((genre) => (
            <button
              key={genre.value}
              value={genre.value}
              onMouseUp={() => filterMoviesByGenre(genre.value)}
              className="category text-white bg-gray-800 rounded-xl px-4 mx-2"
            >
              {genre.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 p-3">
        {filteredMovies.map((movie) => (
          <Link to={`/details/${movie.id}`} key={movie.id}>
            <Card movie={movie} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Movies;
