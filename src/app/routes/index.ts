import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { ColonyRoutes } from '../modules/colony/colony.routes';

const router = express.Router();
const moduleRutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
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
    route: ColonyRoutes
  }
];

moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
