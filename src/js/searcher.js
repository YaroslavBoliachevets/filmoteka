import { options } from './api';
import { renderMovies } from './renderMovies';
import { fetchPopularMovies } from './fetchPopularMovies';
import { openModal } from './modal';

const searchFrom = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

const fetchMoviesByQuery = async function (query) {
  if (!query.trim()) return;

  const warningElement = document.querySelector('.warning');
  warningElement.textContent = '';

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
      warningElement.textContent =
        'Search result not successful. Enter the correct movie name or watch popular';

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

const fetchMovieById = async function (id) {
  try {
    const responceId = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/external_ids`,
      options,
    );
    const dataId = await responceId.json();

    const responceData = await fetch(
      `https://api.themoviedb.org/3/find/${dataId.imdb_id}?external_source=imdb_id`,
      options,
    );
    const data = await responceData.json();

    openModal();
  } catch (err) {
    console.error('Error:', err);
  }
};

export { fetchMovieById };
