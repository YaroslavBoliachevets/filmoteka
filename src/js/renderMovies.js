import { options, genresList } from './api';
import { openModal } from './modal';
import { fetchMovieById } from './searcher';


function renderMovies(movies) {
  const container = document.querySelector('.movies');

  if (!container) {
    console.error('error');
    return;
  }

  container.innerHTML = '';
  movies.forEach(({ poster_path, title, genre_ids, release_date, id }) => {
    const genres = findGenres(genre_ids);
    const release = release_date.slice(0, 4);

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.innerHTML = `
      <img class="movie-img" src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" />
      <div class="movie-description">
        <p class="movie-name">${title}</p>
        <p class="movie-genre">${genres} | ${release}</p>
      </div>
    `;

    movieCard.addEventListener('click', ()=> {handleMovieClick(id)}
    );

    container.appendChild(movieCard);
  });
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

  try {
    const movie = await fetchMovieById(id);
    console.log('handleMovieClick movie', movie);
    
    openModal(movie);
  } catch(err) {
    console.error('Error:', err);
  }
  
}
export { renderMovies, findGenres };
