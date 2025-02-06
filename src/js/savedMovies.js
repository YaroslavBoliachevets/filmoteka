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
	library.classList.add('.accent');
	const movies = getDataFromLS('selectedMovies');
	checkExists(movies);

	const formatedData = {results: movies.flat()};
	
	renderMovies(formatedData);
	if (formatedData) {renderPagination()} else {
		'No saved movies yet'
	}
	
}

export {renderSavedMovies};