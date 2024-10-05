import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchImages, per_page } from './js/pixabay-api.js';
import {
  handleSuccess,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loaderIndicator = document.getElementById('loader-indicator');
const loadMoreButton = document.querySelector('.gallery-button');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage = 1;
let currentQuery = '';

form.addEventListener('submit', handleSubmit);

loadMoreButton.addEventListener('click', handleLoadMore);

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const query = form.elements.state.value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Enter a search query',
      position: 'center',
    });
    return;
  }

  gallery.innerHTML = '';
  currentPage = 1;
  currentQuery = query;
  showLoader(loaderIndicator);

  try {
    const { hits, totalHits } = await fetchImages(currentQuery, currentPage);
    hideLoader(loaderIndicator);

    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'center',
      });
      return;
    }

    gallery.insertAdjacentHTML('beforeend', handleSuccess(hits));
    lightbox.refresh();

    if (hits.length === per_page && totalHits > per_page) {
      loadMoreButton.style.display = 'block';
    } else {
      loadMoreButton.style.display = 'none';
    }
  } catch (error) {
    hideLoader(loaderIndicator);
    iziToast.error({
      message: 'Error! Something went wrong.',
      position: 'center',
    });
  }
}

async function handleLoadMore() {
  currentPage += 1;
  showLoader(loaderIndicator);

  try {
    const { hits, totalHits } = await fetchImages(currentQuery, currentPage);
    hideLoader(loaderIndicator);

    if (hits.length === 0) {
      iziToast.error({
        message: 'No more images to load!',
        position: 'center',
      });
      return;
    }

    gallery.insertAdjacentHTML('beforeend', handleSuccess(hits));
    lightbox.refresh();

    if (currentPage * per_page >= totalHits) {
      loadMoreButton.style.display = 'none';
    }
  } catch (error) {
    hideLoader(loaderIndicator);
    iziToast.error({
      message: 'Error! Something went wrong.',
      position: 'center',
    });
  }
}
    