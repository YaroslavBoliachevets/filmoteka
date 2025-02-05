import { options } from './api';
import { renderMovies } from './renderMovies';
import { renderPopularMovies } from './renderPopularMovies';
import { renderPagination } from './pagination';

const searchFrom = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

function renderQueryMovies(query, page = 1) {
  fetchMoviesByQuery(query, page).then((data) => {
    if (data) {
      const { page, total_pages, results } = data;

      if (results === 0) {
        const warningElement = document.querySelector('.warning');
        warningElement.textContent = '';
        warningElement.textContent =
          'Search result not successful. Enter the correct movie name or watch popular';

        renderPopularMovies();
      }

      renderMovies(data);

      if (total_pages > 1) {
        renderPagination(page, total_pages, query);
      }
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

    const data = await responce.json();

    return data;
  } catch (err) {
    console.error('Error:', err);
  }
};

searchFrom.addEventListener('submit', (e) => {
  e.preventDefault();
  let query = searchInput.value;
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
