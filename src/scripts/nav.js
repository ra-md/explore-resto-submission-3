const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__list');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

headerMenu.addEventListener('click', (event) => {
  nav.classList.toggle('nav--open');

  if (headerMenu.innerHTML === '☰') {
    headerMenu.innerHTML = '✖';
    body.style.overflowY = 'hidden';
  } else {
    headerMenu.innerHTML = '☰';
    body.style.overflowY = 'auto';
  }

  event.stopPropagation();
});

navItem.forEach((item) => {
  item.addEventListener('click', (event) => {
    nav.classList.remove('nav--open');
    headerMenu.innerHTML = '☰';

    event.stopPropagation();
  });
});
