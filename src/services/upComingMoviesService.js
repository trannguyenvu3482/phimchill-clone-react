import request from '../utils/httpRequest';

export const getUpcomingMovies = async ({ page = 1 }) => {
  try {
    const { data } = await request.get('movie/upcoming', {
      params: {
        api_key: process.env.REACT_APP_TMDB_API_KEY,
        language: 'vi',
        page,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
