import { renderMovies } from "./renderMovies";
import { options } from "./api";
import { renderPagination } from "./pagination";
import {pushDataToLS} from './localStorage'; 
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
		  pushDataToLS('movies', data);
		  pushDataToLS('query', '');
		  pushDataToLS('scrollPosition', 0);
		  
		  renderPagination(page, total_pages);
		}

	  });
  } 


renderPopularMovies();

  export {fetchPopularMovies, renderPopularMovies};