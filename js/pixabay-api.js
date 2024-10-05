import axios from 'axios';

export async function fetchData(inputSearch) {
    const searchParams = new URLSearchParams({
        key: "46332021-f156325159d295bd8ceb1a335",
        q: `${inputSearch}`,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
   try {
    const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}