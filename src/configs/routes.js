const routes = {
  home: '/home',
  list: '/list/:listId',
  info: '/info/:movieId',
  watch: '/xem/:movieId',
  search: '/tim-kiem/:query',
  login: '/login',
  register: '/register',
  landing: '/',
  error: '*', // 404
};

export default routes;
