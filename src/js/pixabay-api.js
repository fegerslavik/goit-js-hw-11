import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

export async function getImagesByQuery(query) {
  if (!API_KEY) {
    throw new Error('Missing Pixabay API key. Set VITE_PIXABAY_KEY in .env');
  }

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
