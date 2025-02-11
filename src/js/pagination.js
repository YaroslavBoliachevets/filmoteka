import { renderPopularMovies } from './renderPopularMovies';
import { renderQueryMovies } from './searcher';
import { getElementBySelector } from './utils/common';

function renderPagination(page = 1, total_pages = 1, query = '') {
  
  const pagination = getElementBySelector('.pagination');

  pagination.innerHTML = `<button class="prev" type="button">Prev</button>
	<span class="page-info">${page} / ${
    total_pages > 100 ? '100+' : total_pages
  }<span id="current-page"></span></span>
	<button class="next">Next</button>`;

  const prevButton = getElementBySelector('.prev');
  const nextButton = getElementBySelector('.next');

  updateButtonState(prevButton, page === 1);

  if (page == total_pages) {
    nextButton.setAttribute('disabled', 'false');
    nextButton.classList.add('disabled');
  }

  nextButton.removeEventListener('click', nextPage);
  nextButton.addEventListener('click', () => {
    nextPage(page, query);
  });

  prevButton.removeEventListener('click', prevPage);
  prevButton.addEventListener('click', () => {prevPage(prevButton, page, query)});
}

function nextPage(page, query) {
  scrollToTop();
  const nextPage = page + 1;

  if (query) {
    renderQueryMovies(query, nextPage);
  } else {
    renderPopularMovies(nextPage);
  }
}

function prevPage(prevButton, page, query) {
  scrollToTop();

  if (page > 1) {
    prevButton.removeAttribute('disabled');
    prevButton.classList.remove('disabled');
  }
  page -= 1;

  if (query) {
    renderQueryMovies(query, page);
  } else {
    renderPopularMovies(page);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function updateButtonState(button, isDisabled) {
  if (isDisabled) {    
    button.setAttribute('disabled', 'true');
    button.classList.add('disabled')
  } else {
    button.removeAttribute('disabled');
    button.classList.remove('disabled');
  }
}

export { renderPagination };
