import { Router } from 'express';
import * as userCtrl from '../controllers/auth.controller.js';
const router = Router();

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);

export default router;
