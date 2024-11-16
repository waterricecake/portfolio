import setSettingsTestData from './setSettingsTestData';
import { close } from '#src/common/repository/MongoRepository.js';

const setTest = async () => {
  await setTestData();
};

const clearTest = async () => {
  await close();
};

const setTestData = async () => {
  await setSettingsTestData();
};

export { setTest, clearTest };
