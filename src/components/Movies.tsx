import { useEffect } from "react";

function Movies() {
  //   const [movies, setMovies] = useState([]);

  //   const url =
  //     "https://api.themoviedb.org//3/discover/movie?api_key=2718329d450e46aabda8f0221fe92a73";

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    return () => {
      getMovies();
      console.log(import.meta.env.VITE_SOME_KEY);
    };
  }, []);
  return <div></div>;
}

export default Movies;
