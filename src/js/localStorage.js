function addMovieToStorage(movie) {	
	// console.log('add movies:', movie[0].id);
	
	const movies = JSON.parse(localStorage.getItem('selectedMovies')) || [];
  
	const isMovieExists = movies.some(
	  (storedMovie) => storedMovie[0]?.id === movie[0]?.id,
	);
  
	if (isMovieExists) {
	} else {
	  movies.push(movie);
	  localStorage.setItem('selectedMovies', JSON.stringify(movies));
	}
  }
  
  function removeMovieFromStorage(movie) {
	// console.log('remove movies:', movie[0].id);
	
	const movies = JSON.parse(localStorage.getItem('selectedMovies')) || [];

	// console.log('delete', (storedMovie[0]?.id !== movie[0]?.id), 'movie?.id:', movie[0]?.id);
  
	const updatedMovies = movies.filter(
	  (storedMovie) => storedMovie[0]?.id !== movie[0]?.id
	  
	);
	// console.log('updatedMovies', updatedMovies);
	
	localStorage.setItem('selectedMovies', JSON.stringify(updatedMovies));
  }

  function isMovieInStorage(movie) {
	const movies = JSON.parse(localStorage.getItem('selectedMovies')) || [];
  
	const isMovieExists = movies.some(
	  (storedMovie) => storedMovie[0]?.id === movie[0]?.id,
	);
  
	return isMovieExists ? 'REMOVE' : 'ADD';
  }


function switchMovieInLocalStorage(btn, movie) {

  if (btn.textContent === 'REMOVE') {
    removeMovieFromStorage(movie);
    btn.textContent = 'ADD';
  } else {
    addMovieToStorage(movie);
    btn.textContent = 'REMOVE';
  }
}

export {switchMovieInLocalStorage, isMovieInStorage};