import { API } from '../utils/config';
import axios from 'axios';

export const getProducts = () => {
    return axios.get(`${API}/product/`)
}

export const getProductDetails = (id) => {
    return axios.get(`${API}/product/${id}`)
}

export const getCategories = () => {
    return axios.get(`${API}/category`)
}

