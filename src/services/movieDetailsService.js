import request from '../utils/httpRequest';

export const getMovieDetails = async (movie_id) => {
  try {
    const { data } = await request.get(`movie/${movie_id}`, {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'vi',
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
