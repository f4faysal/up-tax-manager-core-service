import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ColonyValidation } from './colony.validation';
import { ColonyController } from './colony.controller';

const router = express.Router();

router.get('/', ColonyController.getAllData);
router.get('/:id', ColonyController.getSingleData);
router.patch('/:id', ColonyController.updateData);
router.delete('/:id', ColonyController.deleteData);
router.post(
  '/create-colony',
  validateRequest(ColonyValidation.create),
  ColonyController.insertIntoDB
);

export const ColonyRoutes = router;
