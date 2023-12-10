import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FinancialYearValidation } from './financialYear.validation';
import { FinancialYearController } from './financialYear.controller';

const router = express.Router();

router.get('/', FinancialYearController.getAllData);
router.get('/due-payment-year/:homeId', FinancialYearController.dueYearData);
router.get('/:id', FinancialYearController.getSingleData);
router.patch(
  '/:id',
  validateRequest(FinancialYearValidation.update),
  FinancialYearController.updateData
);
router.delete('/:id', FinancialYearController.deleteData);
router.post(
  '/create-financial-year',
  validateRequest(FinancialYearValidation.create),
  FinancialYearController.insertIntoDB
);

export const FinancialYearRoutes = router;
