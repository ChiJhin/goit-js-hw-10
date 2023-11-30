import Notiflix from 'notiflix';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

fetchBreeds()
  .then(breeds => {
    loader.style.display = 'none';

    const cats = breeds
      .map(
        breed => `
    <option value="${breed.id}">${breed.name}</optiom>
    `
      )
      .join('');

    select.insertAdjacentHTML('beforeend', cats);
  })
  .catch(error => {
    loader.style.display = 'none';
    // showError();
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  });

select.addEventListener('change', function () {
  const selectedBreedId = this.value;
  catInfo.innerHTML = '';

  loader.style.display = 'block';

  fetchCatByBreed(selectedBreedId)
    .then(breeds => {
      loader.style.display = 'none';

      const catData = breeds[0];
      catInfo.innerHTML = `
        <div><img src="${catData.url}" border ="1px solid black" width ="450"/></div>
        <div>
        <h2>${catData.breeds[0].name}</h2>
        <p>${catData.breeds[0].description}</p>
        <p>Temperament: ${catData.breeds[0].temperament}</p>
        </div>
        `;

      catInfo.style.display = 'flex';
      catInfo.style.gap = '20px';
    })
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
});
