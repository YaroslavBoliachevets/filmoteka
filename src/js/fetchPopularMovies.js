import { renderMovies } from "./renderMovies";
import { options } from "./api";
import { renderPagination } from "./pagination";

const fetchPopularMovies = async function (page=1) {
	try {
	  const response = await fetch(
		`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
		options,
	  );
	  const data = await response.json();
	//   console.log('data.results', data.results , data.page, data.total_pages);
	  
	  return data;
	} catch (err) {
	  console.error('Error:', err);
	}
  };

fetchPopularMovies().then((data) => {
	if (data) {
	  renderMovies(data);
	  renderPagination(data);
	}
  });

  export {fetchPopularMovies};