// Config
import { routes } from '../configs';

// Pages
import {
  FilmList,
  Home,
  Info,
  Landing,
  Login,
  Register,
  Search,
} from '../pages/';

// Layouts
import BlankNavbarLayout from '../layouts/BlankNavbarLayout/BlankNavbarLayout';
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

// Public routes
const publicRoutes = [
  { path: routes.home, component: Home, layout: DefaultLayout },
  { path: routes.search, component: Search, layout: DefaultLayout },
  { path: routes.info, component: Info, layout: DefaultLayout },
  { path: routes.login, component: Login, layout: DefaultLayout },
  { path: routes.register, component: Register, layout: DefaultLayout },
  { path: routes.list, component: FilmList, layout: DefaultLayout },
  { path: routes.landing, component: Landing, layout: BlankNavbarLayout },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
