import express from 'express';
import cors from 'cors';
import settingRouter from './settings/router/SettingsRouter.js';
import structureRouter from './structure/router/StructureRouter.js'

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());

app.use('/settings', settingRouter);
app.use('/structures', structureRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트에서 대기 중');
});