import express from 'express';
import cors from 'cors';
import settingRouter from './settings/route/SettingsRouter.js';
import structureRouter from './structures/route/StructureRouter.js';
import articleRouter from './articles/route/ArticlesRouter.js';
import { connect, close } from './common/repository/MongoRepository.js';
import initSettingDatas from './settings/mock/InitSettingMockData.js';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors());
connect();
initSettingDatas();

app.use('/settings', settingRouter);
app.use('/structures', structureRouter);
app.use('/articles', articleRouter);

const server = app.listen(app.get('port'), () => {
  console.log(`Listening ${app.get('port')}`);
});

const stopServer = async () => {
  if (server) {
    await server.close(() => {
      console.log('Server closed');
    });
  }
};

const gracefulShutdown = async () => {
  console.log('Closing server...');
  await stopServer();
  await close();
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('uncaughtException', (err) => {
  console.error('UncaughtException', err);
  gracefulShutdown();
});

export { app, stopServer };
