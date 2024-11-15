import express from 'express';
import fs from 'fs/promises';

const router = express.Router();

const getMockData = async () => {
  const data = await fs.readFile(
    new URL('./../mock/SettingsMock.json', import.meta.url),
  );
  return JSON.parse(data);
};

router.get('/:userId', async (req, res) => {
  const mock = await getMockData();
  res.json(mock);
});

export default router;
