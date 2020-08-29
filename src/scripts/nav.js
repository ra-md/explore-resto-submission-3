const nav = document.querySelector('.nav');
const headerMenu = document.querySelector('.header__menu');
const jumbotron = document.querySelector('.jumbotron');

headerMenu.addEventListener('click', (event) => {
  nav.classList.toggle('nav--open');

  if (headerMenu.innerHTML === '☰') {
    headerMenu.innerHTML = '✖';
  } else {
    headerMenu.innerHTML = '☰';
  }

  event.stopPropagation();
});

function removeNav(event) {
  nav.classList.remove('nav--open');
  headerMenu.innerHTML = '☰';
  event.stopPropagation();
}

jumbotron.addEventListener('click', (event) => {
  removeNav(event);
});

jumbotron.addEventListener('click', (event) => {
  removeNav(event);
});
