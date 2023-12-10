import express from 'express';
import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ColonyRoutes } from '../modules/colony/colony.routes';
import { FinancialYearRoutes } from '../modules/financialYear/financialYear.routes';
import { TaxPaymentRoutes } from '../modules/taxPayment/taxPayment.routes';
import { HomeRoutes } from '../modules/home/home.route';

const router = express.Router();
const moduleRutes = [
  {
    path: '/admins',
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
  {
    path: '/financial-years',
    route: FinancialYearRoutes,
  },
  {
    path: '/tax-payments',
    route: TaxPaymentRoutes,
  },
];

moduleRutes.forEach(route => router.use(route.path, route.route));
export default router;
