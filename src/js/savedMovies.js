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
}

function updatesSavedList(scrollPosition) {
	const library = getElementBySelector('.library');
	if (library.classList.contains('accent')) {
		console.log('scrollPosition', scrollPosition);
		
		renderSavedMovies();
		setTimeout(() => {
			window.scrollTo(0, scrollPosition);
		  }, 400);
	}
}

export {renderSavedMovies, updatesSavedList};