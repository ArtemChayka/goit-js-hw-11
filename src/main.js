import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

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

    getImagesByQuery(query)
        .then(data => {
            console.log(data);
            
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'No Results',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                });
            } else {
                createGallery(data.hits);
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



