import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55683815-3d76e1aff0ba46e1ff3d0a45f';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
