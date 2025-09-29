import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  timeout: 10000,
});

export const getPurpose = async () => {
  try {
    const response = await api.get('/purpose');
    return response.data;
  } catch (error) {
    console.error('Error fetching purpose:', error);
    throw error;
  }
};

export default api;