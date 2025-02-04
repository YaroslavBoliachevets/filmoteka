import { renderMovies } from "./renderMovies";
import { options } from "./api";

const fetchPopularMovies = async function () {
	try {
	  const response = await fetch(
		'https://api.themoviedb.org/3/movie/popular',
		options,
	  );
	  const data = await response.json();
	  return data.results;
	} catch (err) {
	  console.error('Error:', err);
	}
  };

fetchPopularMovies().then((movies) => {
	if (movies) {
	  renderMovies(movies);
	}
  });

  export {fetchPopularMovies};