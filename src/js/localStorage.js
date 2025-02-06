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
  // console.log('data to ls', data.flat());
  
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
// console.log('isMovieExists', isMovieExists);
console.log(' isMovieExists ? REMOVE : ADD',  isMovieExists ? 'REMOVE' : 'ADD');

  return isMovieExists ? 'REMOVE' : 'ADD';
}

function switchMovieInLocalStorage(btn, movie) {
  if (!btn || !movie) {
    console.error('invalid btn or movie obj');
    return;
  }

  const isRemoveAction = btn.classList.contains('REMOVE');

  if (isRemoveAction) {
    removeMovieFromStorage(movie);
    btn.classList.remove('REMOVE');
    btn.classList.add('ADD');
    btn.textContent = 'ADD';
  } else {
    btn.classList.add('REMOVE');
    addMovieToStorage(movie);
    btn.classList.remove('ADD');
    btn.classList.add('REMOVE');
    btn.textContent = 'REMOVE';
  }
}

export { switchMovieInLocalStorage, isMovieInStorage, getDataFromLS };
