import express from 'express';
import cors from 'cors';
import settingRouter from './settings/route/SettingsRouter.js';
import structureRouter from './structures/route/StructureRouter.js';
import stringRouter from './strings/route/StringRouter.js';
import connect from './common/repository/MongoRepository.js';
import {
  HandleNoResourceException,
  ExecuteRouter,
} from './common/exceptions/ExceptionHandler.js';

const app = express();
app.set('port', process.env.SERVER_PORT || 3000);
app.use(cors());
connect();

app.use('/settings', settingRouter);
app.use('/structures', structureRouter);
app.use('/strings', stringRouter);

app.use((req, res, next) => {
  console.log('미들웨어 시작');
  const error = new Error('문제가 발생했습니다!');
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).send('서버 에러가 발생했습니다.');
});
app.listen(app.get('port'), () => {
  console.log(app.get('port'), 'Wait');
});
