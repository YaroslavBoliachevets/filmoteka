import { getDataFromLS } from "./localStorage";
import { checkExists, getElementBySelector } from "./utils/common";
import { renderMovies } from "./renderMovies";
import { renderPagination } from "./pagination";
import { renderPopularMovies } from "./renderPopularMovies";

const library = getElementBySelector('.library');
const home = getElementBySelector('.home');

library.addEventListener('click', (e) => {
	e.preventDefault();

	const library = getElementBySelector('.library');
	const home = getElementBySelector('.home');
	
	home.classList.remove('accent');
	library.classList.add('accent');
	renderPopularMovies();
});

home.addEventListener('click', (e) => {
	e.preventDefault();

	const library = getElementBySelector('.library');
	const home = getElementBySelector('.home');
	
	library.classList.remove('accent');
	home.classList.add('accent');
	renderSavedMovies();
});

function renderSavedMovies() {
	
	const movies = getDataFromLS('selectedMovies');
	checkExists(movies);

	const formatedData = {results: movies.flat()};
	
	
	renderMovies(formatedData);
	renderPagination();
}

function updatesSavedList() {
	const library = getElementBySelector('.library');
	if (library.classList.contains('accent')) {
		
		const scrollPosition = getDataFromLS("scrollPosition");

		// console.log('scrollPosition', scrollPosition);
		renderSavedMovies();
		setTimeout(() => {
			window.scrollTo(0, scrollPosition);
		  }, 400);
	}
}

function renderSavedSign(id) {
	const movies = getDataFromLS('selectedMovies');
  const isMovieExists = movies.some(
    (storedMovie) => storedMovie[0]?.id === id,
  );
  if (isMovieExists) {
	return `<button class='selected-movie'>Saved</button>`
  } else return ''
}

export {renderSavedMovies, updatesSavedList, renderSavedSign};