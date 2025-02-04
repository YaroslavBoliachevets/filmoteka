import { options, genresList } from './api';
import { openModal } from './modal';

const fetchPopularMovies = async function () {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular',
      options,
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error('Error:', err);
  }
};

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

    movieCard.addEventListener('click', () => {fetchMovieById(id)});

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

fetchPopularMovies().then((movies) => {
  if (movies) {
    renderMovies(movies);
  }
});

const fetchMovieById = async function(id) {
try {
  

 const responceId = await fetch(`https://api.themoviedb.org/3/movie/${id}/external_ids`, options);
 const dataId = await responceId.json();

 const responceData = await fetch(`https://api.themoviedb.org/3/find/${dataId.imdb_id}?external_source=imdb_id`, options);
 const data = await responceData.json();

 openModal();
} catch(err) {
  console.error("Error:", err);
}
}



export { renderMovies, fetchPopularMovies };
