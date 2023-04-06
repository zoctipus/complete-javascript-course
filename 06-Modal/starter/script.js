'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const closeModalFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModalFunction = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModalFunction);
}

closeModal.addEventListener('click', closeModalFunction);
overlay.addEventListener('click', closeModalFunction);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModalFunction();
  }
});
