import axios from 'axios';
import { API } from '../utils/config';

export const getProfile = token => {
    return axios.get(`${API}/profile`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}




