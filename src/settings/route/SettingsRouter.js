import express from 'express';
import fs from 'fs/promises';
import getSetting from './../application/SettingService.js';

const router = express.Router();

const getMockData = async () => {
  const data = await fs.readFile(
    new URL('./../mock/SettingsMock.json', import.meta.url),
  );
  return JSON.parse(data);
};

router.get('/:userId', async (req, res, next) => {
  try {
    const mock = await getMockData();
    const setting = await getSetting(req.params.userId);
    res.json(mock);
  } catch (err) {
    console.error(err, req.URL);
    next(err);
  }
});

export default router;
