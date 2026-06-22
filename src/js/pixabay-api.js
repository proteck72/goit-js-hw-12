import axios from 'axios';

const API_KEY = '56323164-caf467cf771b73df75e13f6ca';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params: searchParams }).then(response => {
    return response.data;
  });
}
