import { Router } from 'express';
import * as categoriesCtrl from '../controllers/categories.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

router.post(
  '/',
  [authJwt.verifyToken, authJwt.isModerator],
  categoriesCtrl.createCategory
);
router.get('/', categoriesCtrl.getCategories);
router.get('/:id', categoriesCtrl.getCategoriesById);
router.put(
  '/:id',
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.updateCategoryById
);
router.delete(
  '/:id',
  [authJwt.verifyToken, authJwt.isAdmin],
  categoriesCtrl.deleteCategoryById
);

export default router;
