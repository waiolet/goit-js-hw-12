export function handleSuccess(data) {
  return data
    .map(
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
    <a class="card-link" href="${largeImageURL}"><img class="card-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>        <div class="card-container">
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
    )
    .join('');
}

export function showLoader(loaderIndicator) {
  loaderIndicator.classList.remove('hidden');
  loaderIndicator.style.display = 'block';
}

export function hideLoader(loaderIndicator) {
  loaderIndicator.classList.add('hidden');
  loaderIndicator.style.display = 'none';
}