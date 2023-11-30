import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_pAZ6WbO1nCGhkySDJ8i1njyLsNqBBlqNUElKpa6Og6dZe9NxQ3gNeRBtJVNYbdFJ';

const catUrl = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios
    .get(`${catUrl}/breeds`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`${catUrl}/images/search?breed_ids=${breedId}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      throw error;
    });
}

export { fetchCatByBreed, fetchBreeds };
