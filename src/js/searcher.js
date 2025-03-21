import { options } from './api';
import { renderMovies } from './renderMovies';
import { renderPopularMovies } from './renderPopularMovies';
import { renderPagination } from './pagination';
import { checkExists, getElementBySelector } from './utils/common';
import { pushDataToLS } from './localStorage';

const searchFrom = getElementBySelector('.search-form');
const searchInput = getElementBySelector('.search-input');

function renderQueryMovies(query, page = 1) {
  checkExists(query);
  fetchMoviesByQuery(query, page).then((data) => {
    if (data) {
      const { page, total_pages, results } = data;
      pushDataToLS('query', query);
      pushDataToLS('movies', data);

      checkExists(results);

      const warningElement = getElementBySelector('.warning');
      warningElement.textContent = '';

      if (results.length === 0) {
        warningElement.textContent =
          'Search result not successful. Enter the correct movie name or watch popular';

        renderPopularMovies();
      }
      renderMovies(data);

      renderPagination(page, total_pages, (page) =>
        renderQueryMovies(query, page),
      );
    }
  });
}

const fetchMoviesByQuery = async function (query, page = 1) {
  if (!query.trim()) return;

  try {
    const responce = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      options,
    );

    if (!responce.ok) {
      throw new Error(`HTTP error, status ${responce.status}`);
    }
    const data = await responce.json();

    return data;
  } catch (err) {
    console.error('Error:', err);
  }
};

searchFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = searchInput.value.trim();
  renderQueryMovies(query);
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
    return data;
  } catch (err) {
    console.error('Error:', err);
  }
};

export { fetchMovieById, fetchMoviesByQuery, renderQueryMovies };
