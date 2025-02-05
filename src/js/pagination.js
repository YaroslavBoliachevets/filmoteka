import { renderPopularMovies } from './fetchPopularMovies';
import { renderQueryMovies } from './searcher';

function renderPagination(page = 1, total_pages, query) {

  const pagination = document.querySelector('.pagination');

  pagination.innerHTML = `<button class="prev" type="button">Prev</button>
	<span class="page-info">${page} / ${total_pages}<span id="current-page"></span></span>
	<button class="next">Next</button>`;

  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (page == 1) {
    prevButton.setAttribute('disabled', 'false');
  }

  if (page == total_pages) {
    nextButton.setAttribute('disabled', 'false');
  }

  nextButton.addEventListener('click', () => {
	const nextPage = page + 1;
	
    if (query) {
      renderQueryMovies(query, nextPage);
    } else {
      renderPopularMovies(nextPage);
    }
  });

  prevButton.addEventListener('click', () => {
    if (page > 1) {
      prevButton.removeAttribute('disabled');
    }
    page -= 1;

    if (query) {
      renderQueryMovies(query, page);
    } else {
      renderPopularMovies(page);
    }
  });
}

export { renderPagination };
