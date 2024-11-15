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

const method = {
  getStructure,
};
export default method;
