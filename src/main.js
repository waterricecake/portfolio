import express from 'express';
import cors from 'cors';
import settingRouter from './settings/route/SettingsRouter.js';
import structureRouter from './structures/route/StructureRouter.js';
import stringRouter from './strings/route/StringRouter.js';

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());

app.use('/settings', settingRouter);
app.use('/structures', structureRouter);
app.use('/strings', stringRouter);

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '빈 포트에서 대기 중');
});
