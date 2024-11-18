import { LocaleRepository } from '../../contents/domain/Locale.js';
import { StructureRepository } from '../domain/Structure.js';
import { StructureCategoryRepository } from '../domain/StructureCategory.js';

const createStructureFrom = async (json) => {
  const categories = await createCategoriesFrom(json);
  for (const section of json.sections) {
    section.categoryId = categories.get(section.categoryId);
  }
  return await StructureRepository.create(json);
};

const createCategoriesFrom = async (json) => {
  const categoryMap = new Map();
  const categories = await Promise.all(
    json.categories.map(async (val) => {
      const category = await createOneCategory(val);
      categoryMap.set(val.id, category._id);
      return category._id;
    }),
  );
  json.categories = categories;
  return categoryMap;
};

const createOneCategory = async (json) => {
  await createLocalesFrom(json);
  return await StructureCategoryRepository.create(json);
};

const createLocalesFrom = async (json) => {
  if (!json.locales) {
    return;
  }
  const locales = await LocaleRepository.create(parseToMap(json.locales));
  json.locales = locales._id;
};
const parseToMap = (json) => {
  return new Map(
    Object.entries(json).map(([key, value]) => [
      key,
      new Map(Object.entries(value)),
    ]),
  );
};

export default createStructureFrom;
