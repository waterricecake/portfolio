import initContentsData from '../../contents/mock/InitContents.js';
import initSettingDatas from '../../settings/mock/InitSettingMockData.js';
import initStructure from '../../structures/mock/InitStructure.js';
('../../structures/mock/InitStructure.js');

const initDatas = async () => {
  await initSettingDatas();
  const contents = await initContentsData();
  await initStructure(contents);
};

export default initDatas;
