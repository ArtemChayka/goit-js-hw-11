import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {

    const markup = images.map(image => `
        <li class="gallery-item">
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" />
                <div class="info">
                    <p><b>Likes</b> ${image.likes}</p>
                    <p><b>Views</b> ${image.views}</p>
                    <p><b>Comments</b> ${image.comments}</p>
                    <p><b>Downloads</b> ${image.downloads}</p>
                </div>
            </a>
        </li>
    `).join('');

    gallery.innerHTML = markup;
    lightbox.refresh();
}

export function clearGallery() {
    gallery.innerHTML = '';
}