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
	  
	  return data;
	} catch (err) {
	  console.error('Error:', err);
	}
  };

  function renderPopularMovies(page=1) {
	fetchPopularMovies(page).then((data) => {
		if (data) {
			const {page, total_pages} =  data;
		  renderMovies(data);
		  
		  renderPagination(page, total_pages);
		}

	  });
  } 


renderPopularMovies();

  export {fetchPopularMovies, renderPopularMovies};