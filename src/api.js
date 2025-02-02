import axios from 'axios';

const API_URL = 'https://dummyapi.online/api/movies';

export const getMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
