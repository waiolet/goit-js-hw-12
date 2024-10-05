import axios from 'axios';

const API_KEY = '46332021-f156325159d295bd8ceb1a335';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchData(inputSearch) {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: `${inputSearch}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page, 
        per_page: 15
    });
   try {
    const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}