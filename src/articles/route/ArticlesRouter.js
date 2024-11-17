import express from 'express';
import fs from 'fs/promises';
import structureService from '../application/StructureService.js';

const router = express.Router();

const getMockData = async (filename) => {
  const data = await fs.readFile(
    new URL(`./../mock/${filename}`, import.meta.url),
  );
  return JSON.parse(data);
};

router.get('/article/:articleId', async (req, res) => {
  const mock = await structureService.get(req.params.articleId);
  res.json(mock);
});

export default router;
