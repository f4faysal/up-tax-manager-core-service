import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TaxPaymentValidation } from './taxPayment.validation';
import { TaxPaymentController } from './taxPayment.controller';

const router = express.Router();

router.get('/', TaxPaymentController.getAllData);
router.get('/:id', TaxPaymentController.getSingleData);
router.patch(
  '/:id',
  validateRequest(TaxPaymentValidation.update),
  TaxPaymentController.updateData
);
router.delete('/:id', TaxPaymentController.deleteData);
router.post(
  '/create-colony',
  validateRequest(TaxPaymentValidation.create),
  TaxPaymentController.insertIntoDB
);

export const TaxPaymentRoutes = router;
