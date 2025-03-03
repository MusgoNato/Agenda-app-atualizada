import axios from 'axios';

const createAxiosInstance = (customBaseURL = import.meta.env.VITE_API_BASE_URL) => {
    return axios.create({
        baseURL: customBaseURL || 'http://127.0.0.1:8000/api',
        headers: {
            'Content-type': 'application/json',
            'Authorization': import.meta.env.VITE_AUTHORIZATION_KEY,
        }
    });
};

export default createAxiosInstance;
