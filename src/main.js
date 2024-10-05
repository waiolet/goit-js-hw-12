import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchData } from './js/pixabay-api.js'; 
import {
  handleSuccess,
  showLoader,
  hideLoader,
  clearGallery,
  smoothScroll
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loaderIndicator = document.getElementById('loader-indicator');
const loadMoreBtn = document.querySelector('.load-more');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);
async function handleSubmit(event) {
    event.preventDefault();
    query = form.elements.state.value.trim();
    if (!query) {
        iziToast.error({ message: 'Enter a search query', position: 'center' });
        return;
    }

    clearGallery();
    page = 1;
    loadMoreBtn.classList.add('hidden');
    showLoader(loaderIndicator);

    try {
        const result = await fetchData(query, page);
        hideLoader(loaderIndicator);
        totalHits = result.totalHits;

        if (result.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, no images found. Try again!',
                position: 'center',
            });
            return;
        }

        handleSuccess(result.hits);
        lightbox.refresh();

        if (result.hits.length < totalHits) {
            loadMoreBtn.classList.remove('hidden');
        }
    } catch (error) {
        hideLoader(loaderIndicator);
        iziToast.error({ message: 'Error! Something went wrong.', position: 'center' });
    }
}   
async function loadMoreImages() {
    page += 1;
    showLoader(loaderIndicator);
    
    try {
    const result = await fetchData(query, page);
    hideLoader(loaderIndicator);

    handleSuccess(result.hits);
    lightbox.refresh();
    smoothScroll();
        
    if (page * 15 >= totalHits) {
      loadMoreBtn.classList.add('hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'center',
      });
    }
  } catch (error) {
    hideLoader(loaderIndicator);
    iziToast.error({ message: 'Error! Something went wrong.', position: 'center' });
  }
}    