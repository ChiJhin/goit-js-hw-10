import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_pAZ6WbO1nCGhkySDJ8i1njyLsNqBBlqNUElKpa6Og6dZe9NxQ3gNeRBtJVNYbdFJ';

const catUrl = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  const url = `${catUrl}/breeds`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  const url = `${catUrl}/images/search?breed_ids=${breedId}`;

  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export { fetchCatByBreed, fetchBreeds };
