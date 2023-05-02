import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_S6qxUw1V3jBuAHhhYKLJvo6heHUo07hKN6FJE60cBQM5v7Zisk852abMbUsg6PeR';

export const fetchBreeds = async () => {
  const response = await axios.get('/breeds');
  return response.data;
};

export const fetchDogByBreed = async breedId => {
  const response = await axios.get('/images/search', {
    params: {
      breed_id: breedId,
    },
  });
  return response.data[0];
};
