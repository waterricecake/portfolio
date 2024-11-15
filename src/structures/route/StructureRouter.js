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

router.get('', async (req, res) => {
  const mock = await structureService.getStructure();
  res.json(mock);
});

export default router;
