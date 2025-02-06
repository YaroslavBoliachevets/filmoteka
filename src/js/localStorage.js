function addMovieToStorage(movie) {
  if (!movie[0] || !movie[0].id) {
    console.error('invalid movie obj');
    return;
  }

  const movies = getDataFromLS('selectedMovies');

  const isMovieExists = movies.some(
    (storedMovie) => storedMovie[0]?.id === movie[0]?.id,
  );

  if (!isMovieExists) {
    movies.push(movie);
    pushDataToLS('selectedMovies', movies);
  }
}

function getDataFromLS(key) {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  return data;
}

function pushDataToLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function removeMovieFromStorage(movie) {
  const movies = getDataFromLS('selectedMovies');

  const updatedMovies = movies.filter(
    (storedMovie) => storedMovie[0]?.id !== movie[0]?.id,
  );

  pushDataToLS('selectedMovies', updatedMovies);
}

function isMovieInStorage(movie) {
  const movies = getDataFromLS('selectedMovies');
  const isMovieExists = movies.some(
    (storedMovie) => storedMovie[0]?.id === movie[0]?.id,
  );

  return isMovieExists ? 'REMOVE' : 'ADD';
}

function switchMovieInLocalStorage(btn, movie) {
  if (!btn || !movie) {
    console.error('invalid btn or movie obj');
    return;
  }

  const isRemoveAction = btn.classList.contains('btn-remove');

  if (isRemoveAction) {
    removeMovieFromStorage(movie);
    btn.classList.remove('btn-remove');
    btn.classList.add('btn-add');
    btn.textContent = 'ADD';
  } else {
    btn.classList.add('btn-remove');
    addMovieToStorage(movie);
    btn.classList.remove('btn-add');
    btn.classList.add('btn-remove');
    btn.textContent = 'REMOVE';
  }
}

export { switchMovieInLocalStorage, isMovieInStorage };
