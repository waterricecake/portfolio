import fs from 'fs/promises';

const getMockData = async (filename) => {
  const data = await fs.readFile(
    new URL(`./../mock/${filename}`, import.meta.url),
  );
  return JSON.parse(data);
};

const getArticle = async (articleId) => {
  console.log(articleId);
  const structure = await getMockData(`${articleId}.json`);
  return structure;
};

export { getArticle };
