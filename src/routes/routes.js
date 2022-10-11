// Config
import { routes } from '../configs';

// Pages
import {
  Error,
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
  { path: routes.login, component: Login, layout: BlankNavbarLayout },
  { path: routes.register, component: Register, layout: BlankNavbarLayout },
  { path: routes.landing, component: Landing, layout: BlankNavbarLayout },
  { path: routes.error, component: Error, layout: DefaultLayout },
];

// Private routes
const privateRoutes = [
  { path: routes.search, component: Search, layout: DefaultLayout },
  { path: routes.info, component: Info, layout: DefaultLayout },
  { path: routes.list, component: FilmList, layout: DefaultLayout },
  { path: routes.home, component: Home, layout: DefaultLayout },
];

export { publicRoutes, privateRoutes };
