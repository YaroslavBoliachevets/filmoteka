import { getElementBySelector } from './utils/common';

function renderPagination(page = 1, total_pages = 1, callback) {
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

  nextButton.removeEventListener('click', () => nextPage(page, callback));
  nextButton.addEventListener('click', () => nextPage(page, callback));

  prevButton.removeEventListener('click', prevPage);
  prevButton.addEventListener('click', () => prevPage(page, callback));
}

function nextPage(page, callback) {
  scrollToTop();
  const nextPage = page + 1;
  callback(nextPage);
}

function prevPage(page, callback) {
  scrollToTop();

  const prevButton = getElementBySelector('.prev');
  if (page > 1) {
    prevButton.removeAttribute('disabled');
    prevButton.classList.remove('disabled');
  }

  const newPage = page - 1;
  callback(newPage);
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
    button.classList.add('disabled');
  } else {
    button.removeAttribute('disabled');
    button.classList.remove('disabled');
  }
}
export { renderPagination };
