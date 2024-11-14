import express from 'express';
import cors from 'cors';
import router from './settings/router/SettingsRouter.js';

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(cors());

app.use('/', router);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트에서 대기 중');
});