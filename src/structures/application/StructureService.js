import fs from 'fs/promises';

const getMockData = async (filename) => {
  const data = await fs.readFile(
    new URL(`./../mock/${filename}`, import.meta.url),
  );
  return JSON.parse(data);
};

const getStructure = async (userId) => {
  const structure = await getMockData('StructureMock.json');
  return structure;
};

const method = {
  getStructure,
};
export default method;
