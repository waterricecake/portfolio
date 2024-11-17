import ContentsRepository from '../domain/Contents.js';
import initAbout from './InitAbout.js';

const initContentsData = async () => {
  const hasData = await ContentsRepository.countDocuments();
  if (hasData) {
    console.log('Contents data already init');
    return null;
  }
  console.log('Init Contents data');
  return await setContents();
};

const setContents = async () => {
  const contents = {};
  contents.about = await initAbout();
  return contents;
};

export default initContentsData;
