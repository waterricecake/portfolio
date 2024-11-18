import { contentsPopulate, ContentsRepository } from '../domain/Contents.js';

const getContents = async (id) => {
  const contents = await ContentsRepository.findById(id).populate(
    contentsPopulate,
  );
  return contents;
};

export { getContents };
