import fs from 'fs/promises';

const getMockData = async (filename) => {
  const data = await fs.readFile(
    new URL(`./../mock/${filename}`, import.meta.url),
  );
  return JSON.parse(data);
};

const getStructure = async () => {
  const structure = await getMockData('StructureMock.json');
  const categories = structure['categories'];
  const sections = structure['sections'];
  for (const section of sections) {
    const category = categories.find(
      (category) => category.id === section['categoryId'],
    );
    if (!category) {
      throw new Error(
        `[DataProvider] The section with id "${section.id}" has an invalid categoryId "${section['categoryId']}". There's no such category.`,
      );
    }

    section.category = category;
    section.content = await getMockData(`${section.id}.json`);
  }
  return structure;
};

const getAbout = async () => {
  return await getMockData('about.json');
};

const getEducation = async () => {
  return await getMockData('education.json');
};

const getSkills = async () => {
  return await getMockData('skills.json');
};

const getExperience = async () => {
  return await getMockData('experience.json');
};

const getPortfolio = async () => {
  return await getMockData('portfolio.json');
};

const getAchievements = async () => {
  return await getMockData('achievements.json');
};

const getUpdates = async () => {
  return await getMockData('updates.json');
};

const getContact = async () => {
  return await getMockData('contact.json');
};

const method = {
  getStructure,
  getAbout,
  getEducation,
  getSkills,
  getExperience,
  getPortfolio,
  getAchievements,
  getUpdates,
  getContact,
};
export default method;
