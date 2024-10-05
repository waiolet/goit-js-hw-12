export function handleSuccess(images) {
    const markup = images.map(
        ({
            largeImageURL,
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => {
            return `<li class="gallery-item">
            <article class="card">
                <a class="card-link" href="${largeImageURL}">
                    <img class="card-image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
                </a>
                <div class="card-container">
                    <div class="card-item">
                        <p class="card-title">Likes</p>
                        <p class="card-count">${likes}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Views</p>
                        <p class="card-count">${views}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Comments</p>
                        <p class="card-count">${comments}</p>
                    </div>
                    <div class="card-item">
                        <p class="card-title">Downloads</p>
                        <p class="card-count">${downloads}</p>
                    </div>
                </div>
            </article>
            </li>`;
        }
    ).join('');

    const gallery = document.querySelector('.gallery');
    
    gallery.insertAdjacentHTML('beforeend', markup);
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}


export function showLoader(loaderIndicator) {
    loaderIndicator.classList.remove('hidden');
}

export function hideLoader(loaderIndicator) {
    loaderIndicator.classList.add('hidden');
}

export function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}