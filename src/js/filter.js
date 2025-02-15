import { genresList, options } from './api';
import { renderMovies } from './renderMovies';
import { getElementBySelector } from './utils/common';
import { pushDataToLS } from './localStorage';
import { renderPagination } from './pagination';

function genreFilter() {
  const container = getElementBySelector('.genre-list');

  // console.log('genre', container);

  container.innerHTML = ``;

  genresList.forEach(({ name, id }) => {
    // console.log('genre', name);

    const genreItem = document.createElement('li');
    genreItem.classList.add('genre-list__item');

    genreItem.innerHTML = `<a class=genre-list__item--genre id=${id}>${name}</a>`;

    container.appendChild(genreItem);
  });
}

const genreList = getElementBySelector('.genre-list');
const genresBtn = getElementBySelector('.open-genres');
genreList.addEventListener('click', (e) => {
  clickGenre(e);
});
genresBtn.addEventListener('click', switchGenresBtn);

function switchGenresBtn() {
  genreFilter();
  const genreList = getElementBySelector('.genre-list');
  genreList.classList.toggle('open');
}

function clickGenre(e) {
  const genreId = e.target.id;
  renderGenreMovies(genreId);

  const genreList = getElementBySelector('.genre-list');
  genreList.classList.toggle('open');
}

const fetchGenreMovies = async function (id = 12, page = 1) {
  try {
    const responce = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`,
      options,
    );

    const data = await responce.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
  }
};

function renderGenreMovies(genreId = 12, page) {
  fetchGenreMovies(genreId, page).then((data) => {
    if (data) {
      const { page, total_pages } = data;
      renderMovies(data);
      pushDataToLS('movies', data);
      pushDataToLS('query', '');
      pushDataToLS('scrollPosition', 0);
      pushDataToLS('genre', genreId);

      renderPagination(page, total_pages, (newPage) =>
        renderGenreMovies(genreId, newPage),
      );
    }
  });
}

export { genreFilter };
