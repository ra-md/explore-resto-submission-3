import { restaurants } from '../DATA.json';

const daftarRestortan = document.getElementById('daftar-restoran');

function potongText(text, end) {
  return `${text.split(' ').slice(0, end).join(' ')}...`;
}

restaurants.forEach(({
  pictureId,
  name,
  city,
  rating,
  description,
}) => {
  daftarRestortan.innerHTML += `
    <article class="restoran">
      <img class="restoran__image" alt="restoran ${name}" src="${pictureId}"/>
      <div class="restoran-body">
        <h1 class="restoran-body__name">${name}</h1>
        <p class="restoran-body__description">${potongText(description, 10)}</p>
        <div class="city-rating">
          <span class="city-rating__city"><i class="fas fa-map-marker-alt"></i>${city}</span>
          <span class="city-rating__rating"><i class="fas fa-star"></i>${rating}</span>
        </div>
      </div>
    </article>
  `;
});
