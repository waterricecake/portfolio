import { ContentsRepository } from '../domain/Contents.js';
import initAbout from './InitAbout.js';
import initAchievements from './InitAchievements.js';
import initContact from './InitContact.js';
import initEducation from './InitEducation.js';
import initExperience from './InitExperience.js';
import initPortfolio from './InitPortfolio.js';
import initSkills from './InitSkills.js';
import initUpdates from './InitUpdates.js';

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
  contents.achievements = await initAchievements();
  contents.contact = await initContact();
  contents.education = await initEducation();
  contents.experience = await initExperience();
  contents.portfolio = await initPortfolio();
  contents.skills = await initSkills();
  contents.updates = await initUpdates();
  return contents;
};

export default initContentsData;
