import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AdminController } from './admin.Controller';
import { AdminValidation } from './admin.Validation';

const router = express.Router();

router.get(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AdminController.getSingleAdmin
);
router.get('/', AdminController.getAllAdmins);
router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  AdminController.updateAdmin
);
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  AdminController.deleteAdmin
);

router.post(
  '/create-admin',
  validateRequest(AdminValidation.createAdmin),
  AdminController.insertIntoDB
);

export const AdminRoutes = router;
