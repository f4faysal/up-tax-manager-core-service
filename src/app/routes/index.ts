import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { HomeRoutes } from '../modules/home/home.route';
import { ColonyRoutes } from '../modules/colony/colony.routes';

const router = express.Router();
const moduleRutes = [
  {
    path: '/admin',
    route: AdminRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/colonies',
    route: ColonyRoutes,
  },
  {
    path: '/homes',
    route: HomeRoutes,
  },
];

moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
