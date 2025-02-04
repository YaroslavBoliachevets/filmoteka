function openModal() {
  const closeBtn = document.querySelector('.modal-close-button');
  const modal = document.querySelector('.modal');
  modal.style.display = 'flex';

  window.addEventListener('click', outsideClick);
  window.addEventListener('keydown', handleEscClose);
  closeBtn.addEventListener('click', closeModal);
}

function closeModal() {
  const closeBtn = document.querySelector('.modal-close-button');
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';

  window.removeEventListener('click', outsideClick);
  window.removeEventListener('keydown', handleEscClose);
  closeBtn.removeEventListener('click', closeModal);
}

function outsideClick(e) {
  const modal = document.querySelector('.modal');
  if (e.target === modal) closeModal();
}

function handleEscClose(e) {
  if (e.key === 'Escape' || e.key === 'Esc') closeModal();
}

export { openModal };
