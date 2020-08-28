const nav = document.querySelector('.nav');
const headerMenu = document.querySelector('.header__menu');

let closeIcon = false;

headerMenu.addEventListener('click', (event) => {
  nav.classList.toggle('nav--open');

  closeIcon = !closeIcon;

  if (closeIcon) {
    headerMenu.innerHTML = '✖';
  } else {
    headerMenu.innerHTML = '☰';
  }

  event.stopPropagation();
});
