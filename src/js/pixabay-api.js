import axios from 'axios';

const API_KEY = '50832143-3e18ca1c7d3ff8d3379931b93';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
}