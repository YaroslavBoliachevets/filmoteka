import { genresList } from './api';
import { switchMovieInLocalStorage, isMovieInStorage } from './localStorage';
import { getElementBySelector, checkExists } from './utils/common';

function openModal(movie) {
  checkExists(movie);
  document.body.style.overflow = 'hidden';

  const modal = getElementBySelector('.modal');
  modal.classList.add('is-open');

  window.addEventListener('click', outsideClick);
  window.addEventListener('keydown', handleEscClose);

  renderMovieDescr(movie.movie_results);
  const closeBtn = getElementBySelector('.modal-close-button');

  closeBtn.addEventListener('click', closeModal);
}

function closeModal() {
  document.body.style.overflow = '';
  const closeBtn = getElementBySelector('.modal-close-button');
  const modal = getElementBySelector('.modal');

  modal.classList.remove('is-open');

  window.removeEventListener('click', outsideClick);
  window.removeEventListener('keydown', handleEscClose);
  closeBtn.removeEventListener('click', closeModal);
}

function outsideClick(e) {
  const modal = getElementBySelector('.modal--background');

  if (e.target === modal) closeModal();
}

function handleEscClose(e) {
  if (e.key === 'Escape' || e.key === 'Esc') closeModal();
}

function renderMovieDescr(movie) {
  checkExists(movie);
  const container = getElementBySelector('.modal-content');
  const {
    title = 'Unknown Title',
    original_title = 'Unknown Original Title',
    popularity = 0,
    vote_average = 0,
    vote_count = 0,
    overview = 'No description available',
    genre_ids = [],
    backdrop_path,
    poster_path,
    id,
  } = movie[0];

  const modalBack = getElementBySelector('.modal--background');

  modalBack.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${backdrop_path}')`;
  const genres = findAllGenres(genre_ids);

  checkExists(container);

  container.innerHTML = `
  <button class="modal-close-button" type="button">x</button>
  <img
      class="modal-poster"
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="movie poster"
    />
    <div class="modal-description">
      <h2 class="modal-title">${title}</h2>

      ${renderMetrics(
        vote_average,
        vote_count,
        popularity,
        original_title,
        genres,
      )}
      ${renderArticle(overview)}
      ${renderButtons(movie)}
	  
	  
    </div>
  `;

  const saveBtn = getElementBySelector('.save-movie-btn');

  saveBtn.addEventListener('click', () => {
    switchMovieInLocalStorage(saveBtn, movie);
  });
}

function findAllGenres(genresId) {
  const genres = genresId.map((genr) => {
    const genre = genresList.find(({ id }) => id === genr);
    return genre ? genre.name : 'Unknown';
  });

  return genres;
}

function renderMetrics(
  vote_average,
  vote_count,
  popularity,
  original_title,
  genres,
) {
  return `
  <ul class="metric-list">
        <li class="metric-list__item">
          <p class="metric-list__item--name">Vote / Votes</p>
          <p class="metric-list__item--value"><span class="metric-list__item--value--accent">${vote_average.toFixed(
            1,
          )}</span>${vote_count}</p>
        </li>
        <li class="metric-list__item">
          <p class="metric-list__item--name">Popularity</p>
          <p class="metric-list__item--value">${popularity.toFixed(0)}</p>
        </li>
        <li class="metric-list__item">
          <p class="metric-list__item--name">original title</p>
          <p class="metric-list__item--value">${original_title}</p>
        </li>
        <li class="metric-list__item">
          <p class="metric-list__item--name">genre</p>
          <p class="metric-list__item--value">${genres}</p>
        </li>
      </ul>
  `;
}

function renderArticle(overview) {
  return `
  <article class="article">
		<h3 class="article__title">about</h3>
		<p class="article__description">${overview}</p>
	  </article>
  `;
}

function renderButtons(movie) {
  return `
<button class="save-movie-btn" type="button">${isMovieInStorage(movie)}</button>
	  <button class="save-movie-btn" type="button">add to queue</button>
`;
}

export { openModal };
