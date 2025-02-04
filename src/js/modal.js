import { genresList } from './api';

function openModal(movie) {
  document.body.style.overflow = 'hidden';
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';
  

  window.addEventListener('click', outsideClick);
  window.addEventListener('keydown', handleEscClose);
  

  renderMovieDescr(movie.movie_results);

  const closeBtn = document.querySelector('.modal-close-button');
  closeBtn.addEventListener('click', closeModal);
}

function closeModal() {
  document.body.style.overflow = '';
  const closeBtn = document.querySelector('.modal-close-button');
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';

  window.removeEventListener('click', outsideClick);
  window.removeEventListener('keydown', handleEscClose);
  closeBtn.removeEventListener('click', closeModal);
}

function outsideClick(e) {
  const modal = document.querySelector('.modal--background');

  if (e.target === modal) closeModal();
}

function handleEscClose(e) {
  if (e.key === 'Escape' || e.key === 'Esc') closeModal();
}

function renderMovieDescr(movie) {
  const container = document.querySelector('.modal-content');
  const {
    title,
    original_title,
    popularity,
    vote_average,
    vote_count,
    overview,
    genre_ids,
    backdrop_path, 
    poster_path, video
  } = movie[0];


  const modalBack = document.querySelector('.modal--background');
  
  modalBack.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${backdrop_path}')`;
  const genres = findAllGenres(genre_ids);

  if (!container) {
    console.error('error');
  }

  container.innerHTML = `
  <button class="modal-close-button" type="button">x</button>
  <img
      class="modal-poster"
      src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="movie poster"
    />
    
    <div class="modal-description">

      <h2 class="modal-title">${title}</h2>

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

	  <article class="article">
		<h3 class="article__title">about</h3>
		<p class="article__description">${overview}</p>
	  </article>
	  <button type="button">add to watch</button>
	  <button type="button">add to queue</button>
    </div>
  `;
}

function findAllGenres(genresId) {
  const genres = genresId.map((genr) => {
    const genre = genresList.find(({ id }) => id === genr);
    return genre ? genre.name : 'Unknown';
  });

  return genres;
}

export { openModal };
