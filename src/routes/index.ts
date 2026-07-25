import { Router } from 'express';
import helloRouter from './hello.routes.js';
import matchRouter from './match.routes.js';

const router = Router();

// Mount resources under API namespace
router.use('/hello', helloRouter);
router.use('/matches', matchRouter);

export default router;
