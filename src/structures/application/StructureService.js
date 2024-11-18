import { StructureRepository, structurePopulate } from '../domain/Structure.js';

const getStructure = async (userId) => {
  const structure = await StructureRepository.findOne({
    userId: userId,
  }).populate(structurePopulate);
  return structure;
};

const method = {
  getStructure,
};
export default method;
