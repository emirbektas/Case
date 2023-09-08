import { useState, useEffect } from "react";

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
        <div className="my-20 flex wrapper overflow-x-auto">
          {genres.map((genre) => (
            <button
              key={genre.value}
              value={genre.value}
              onMouseUp={() => filterMoviesByGenre(genre.value)}
              className="category bg-red-500 p-4 m-2"
            >
              {genre.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 p-3">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="border border-red-400">
            <div className="">
              <img
                src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`}
                alt="Movie Image"
                className="rounded-md h-[175px]"
              />
              <div className="text-center">{movie.title}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
