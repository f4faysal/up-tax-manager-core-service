import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FinancialYearController } from './financialYear.controller';
import { FinancialYearValidation } from './financialYear.validation';

const router = express.Router();

router.get('/', FinancialYearController.getAllData);
router.get('/:id', FinancialYearController.getSingleData);
router.patch(
  '/:id',
  validateRequest(FinancialYearValidation.update),
  FinancialYearController.updateData
);
router.delete('/:id', FinancialYearController.deleteData);
router.post(
  '/create-colony',
  validateRequest(FinancialYearValidation.create),
  FinancialYearController.insertIntoDB
);

export const FinancialYearRoutes = router;
