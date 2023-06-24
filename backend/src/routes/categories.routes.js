import { Router } from 'express';
import * as categoriesCtrl from '../controllers/categories.controller.js';

const router = Router();

router.post('/', categoriesCtrl.createCategory);
router.get('/', categoriesCtrl.getCategories);
router.get('/:id', categoriesCtrl.getCategoriesById);
router.put('/:id', categoriesCtrl.updateCategoryById);
router.delete('/:id', categoriesCtrl.deleteCategoryById);

export default router;
