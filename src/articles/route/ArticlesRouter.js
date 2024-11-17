import express from 'express';
import structureService from '../application/StructureService.js';

const router = express.Router();

router.get('/article/:articleId', async (req, res) => {
  const mock = await structureService.get(req.params.articleId);
  res.json(mock);
});

export default router;
