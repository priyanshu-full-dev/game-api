import { Router } from 'express';
import { getHelloMessage } from '../controllers/hello.controller.js';

const router = Router();

router.get('/', getHelloMessage);

export default router;
