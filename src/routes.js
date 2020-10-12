import { lazy } from 'react';
import { HOME, PAYMENT } from './config/routePaths';

const Home = lazy(() => import('./pages/Home'));
const Payment = lazy(() => import('./pages/Home/components/Payment'));

const publicRoutes = [
  {
    path: HOME,
    component: Home,
    exact: true,
  },
  {
    path: PAYMENT,
    component: Payment,
    exact: true,
  },
];

const routes = [...publicRoutes];

export default routes;
