import express from 'express';
import structureService from '../application/StructureService.js';

const router = express.Router();

router.get('/:userId', async (req, res) => {
  const mock = await structureService.getStructure(req.params.userId);
  res.json(mock);
});

export default router;
