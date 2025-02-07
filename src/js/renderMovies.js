import { genresList } from './api';
import { openModal } from './modal';
import { fetchMovieById } from './searcher';
import { getElementBySelector } from './utils/common';
import { renderSavedSign } from './savedMovies';
// import { saveState } from './localStorage';

function renderMovies({ results: movies }, page=1, query='') {
  const container = getElementBySelector('.movies');

  // saveState();
  
  container.innerHTML = '';
  movies.forEach(
    ({
      poster_path,
      title = 'Unknown Title',
      genre_ids = [],
      release_date = 'Unknown date',
      id = '',
    }) => {
      const genres = findGenres(genre_ids);
      const release = release_date?.slice(0, 4);

      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
      ${renderSavedSign(id)}
      <img class="movie-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
      <div class="movie-description">
        <p class="movie-name">${title}</p>
        <p class="movie-genre">${genres} | ${release}</p>
      </div>
    `;

      movieCard.addEventListener('click', () => {
        handleMovieClick(id);
      });

      container.appendChild(movieCard);
    },
  );
}

function findGenres(genresId) {
  const genres = genresId.map((genr) => {
    const genre = genresList.find(({ id }) => id === genr);
    return genre ? genre.name : 'Unknown';
  });
  if (genres.length < 3) {
    return genres.join(', ');
  }
  return genres[0] + ', ' + genres[1] + ', ' + genres[2] + ' ...';
}

async function handleMovieClick(id) {
  // console.log('id', id);
  
  try {
    const movie = await fetchMovieById(id);
// console.log('movie', movie);


    openModal(movie);
  } catch (err) {
    console.error('Error1:', err);
  }
}
export { renderMovies, findGenres };
