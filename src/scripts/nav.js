const nav = document.querySelector('.nav');
const headerMenu = document.querySelector('.header__menu');

headerMenu.addEventListener('click', (event) => {
  nav.classList.toggle('nav--open');

  if (headerMenu.innerHTML === '☰') {
    headerMenu.innerHTML = '✖';
  } else {
    headerMenu.innerHTML = '☰';
  }

  event.stopPropagation();
});
