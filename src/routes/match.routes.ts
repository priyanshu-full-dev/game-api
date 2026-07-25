import { Router } from 'express';
import { getInplayMatches } from '../controllers/match.controller.js';

const router = Router();

router.get('/inplay', getInplayMatches);

export default router;
