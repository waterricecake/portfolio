import express from 'express';
import { getContents } from '../application/ContentsService.js';

const router = express.Router();

router.get('/:contentsId', async (req, res) => {
  const mock = await getContents(req.params.contentsId);
  res.json(mock);
});

export default router;
