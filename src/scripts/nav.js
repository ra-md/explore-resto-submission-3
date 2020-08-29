const nav = document.querySelector('.nav');
const headerMenu = document.querySelector('.header__menu');
const main = document.querySelector('main');

headerMenu.addEventListener('click', (event) => {
  nav.classList.toggle('nav--open');

  if (headerMenu.innerHTML === '☰') {
    headerMenu.innerHTML = '✖';
  } else {
    headerMenu.innerHTML = '☰';
  }

  event.stopPropagation();
});

main.addEventListener('click', (event) => {
  nav.classList.remove('nav--open');
  headerMenu.innerHTML = '☰';
  event.stopPropagation();
});
