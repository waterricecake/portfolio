import express from 'express';
import { getArticle } from '../application/ContentsService.js';

const router = express.Router();

router.get('/:articleId', async (req, res) => {
  const mock = await getArticle(req.params.articleId);
  res.json(mock);
});

export default router;
