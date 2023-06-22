import { Router } from 'express';
import * as pathologiesCtrl from '../controllers/pathologies.controller.js';

const router = Router();

router.post('/', pathologiesCtrl.createPathology);
router.get('/', pathologiesCtrl.getPathologies);
router.get('/:id', pathologiesCtrl.getPathologiesById);
router.put('/:id', pathologiesCtrl.updatePathologyById);
router.delete('/:id', pathologiesCtrl.deletePathologyById);

export default router;
