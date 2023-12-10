import express from 'express';
import { HomeController } from './home.controller';
import validateRequest from '../../middlewares/validateRequest';
import { HomeValidation } from './home.validation';


const router = express.Router();
router.get('/', HomeController.getAllData);
router.get('/:id', HomeController.getSingleData);
router.patch('/:id',validateRequest(HomeValidation.update), HomeController.updateData);
router.delete('/:id', HomeController.deleteData);
router.post(
  '/create-home',
  validateRequest(HomeValidation.create),
  HomeController.insertIntoDB
);

export const HomeRoutes = router;
