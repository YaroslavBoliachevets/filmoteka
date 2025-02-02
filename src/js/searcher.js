import { options } from './api';
import { renderMovies, fetchPopularMovies } from './renderMovies';

const searchFrom = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

const fetchMoviesByQuery = async function (query) {
  if (!query.trim()) return;

  const warningElement = document.querySelector('.warning');
  warningElement.textContent = "";

  try {
    const responce = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options,
    );

    const data = await responce.json();
    const movies = data.results;
    // console.log('movies', movies);


    if (movies.length === 0) {
    //   console.log('daaa', movies.length);
	  warningElement.textContent = "Search result not successful. Enter the correct movie name or watch popular";
	 
      fetchPopularMovies().then((movies) => {
        if (movies) {
          renderMovies(movies);
        }
      });
    }

    renderMovies(movies);
  } catch (err) {
    console.error('Error:', err);
  }
};

searchFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = searchInput.value;
  searchInput.value = '';
  fetchMoviesByQuery(query);
});
