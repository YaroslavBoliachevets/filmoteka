import { fetchPopularMovies } from "./fetchPopularMovies";
import { renderMovies } from "./renderMovies";


function renderPagination({page=1, total_pages}){
	// const responce = fetch()


	const pagination = document.querySelector('.pagination');

	pagination.innerHTML = `<button class="prev" type="button">Prev</button>
	<span class="page-info">${page} / ${total_pages}<span id="current-page">1</span></span>
	<button class="next">Next</button>`;

	const prevButton = document.querySelector('.prev');
	const nextButton = document.querySelector('.next');

	if (page == 1) {prevButton.setAttribute('disabled', 'false');}
	
	nextButton.addEventListener('click', ()=> {
		page+=1;

		
		fetchPopularMovies(page).then((data) => {
			if (data) {
			  renderMovies(data);
			  renderPagination(data);
			}
		  });});

		 
	prevButton.addEventListener('click', ()=> {

	if (page>1) {prevButton.removeAttribute('disabled')}
		page-=1;
		
		fetchPopularMovies(page).then((data) => {
			if (data) {
			  renderMovies(data);
			  renderPagination(data);
			}
		  });});


  }

export {renderPagination};