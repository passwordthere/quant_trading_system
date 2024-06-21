import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

export const getStockData = () => {
    return api.get('/stock-data/');
};
