import express from 'express';
import getSetting from './../application/SettingService.js';

const router = express.Router();

router.get('/:userId', async (req, res, next) => {
  try {
    const setting = await getSetting(req.params.userId);
    res.json(setting);
  } catch (err) {
    console.error(err, req.URL);
    next(err);
  }
});

export default router;
