import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const query = formData.get('search-text').trim();

    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search term!'
        });
        return;
    }

    clearGallery();
    showLoader();

    fetchImages(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'No Results',
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
            } else {
                renderGallery(data.hits);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            iziToast.error({
                title: 'Error',
                message: 'Something went wrong. Please try again later.'
            });
        })
        .finally(() => {
            hideLoader();
        });
});

function showLoader() {
    loader.classList.remove('hidden');
}

function hideLoader() {
    loader.classList.add('hidden');
}


