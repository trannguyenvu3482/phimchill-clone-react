// Config
import { routes } from '../configs';

// Pages
import { Home, Info, Login, Register, Search } from '../pages/';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

// Public routes
const publicRoutes = [
  { path: routes.home, component: Home, layout: DefaultLayout },
  { path: routes.search, component: Search, layout: DefaultLayout },
  { path: routes.info, component: Info, layout: DefaultLayout },
  { path: routes.login, component: Login, layout: DefaultLayout },
  { path: routes.register, component: Register, layout: DefaultLayout },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
