import ContentsRepository from '../domain/Contents.js';

const getArticle = async (id) => {
  console.log(id);
  const structure = await ContentsRepository.find({ id: id });
  return structure;
};

export { getArticle };
