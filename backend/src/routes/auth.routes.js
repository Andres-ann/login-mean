import { Router } from 'express';
const router = Router();

import * as authCtrl from '../controllers/auth.controller.js';
import { verifySignup } from '../middlewares/index.js';

router.post(
  '/signup',
  [verifySignup.checkDuplicateuernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signup
);
router.post('/signin', authCtrl.signin);

export default router;
