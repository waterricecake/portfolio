//import initStructureMockData from '../../structures/mock/InitStructureMockData.js';

import initContentsData from '../../contents/mock/InitContentsData.js';
import initSettingDatas from '../../settings/mock/InitSettingMockData.js';

const initDatas = async () => {
  await initSettingDatas();
  await initContentsData();
  //await initStructureMockData();
};

export default initDatas;
