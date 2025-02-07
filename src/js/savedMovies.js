import { getDataFromLS } from "./localStorage";
import { checkExists, getElementBySelector } from "./utils/common";
import { renderMovies } from "./renderMovies";
import { renderPagination } from "./pagination";

const library = getElementBySelector('.library');
library.addEventListener('click', (e) => {
	e.preventDefault();
	renderSavedMovies();
})

function renderSavedMovies() {
	const library = getElementBySelector('.library');
	library.classList.add('accent');
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
	return `<button>SSSSSAAAAAAVED</button>`
  } else return ''
}

export {renderSavedMovies, updatesSavedList, renderSavedSign};