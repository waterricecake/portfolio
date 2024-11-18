import ArticleRepository from '../domain/Article.js';
import ContentsRepository from '../domain/Contents.js';
import ItemRepository from '../domain/Item.js';
import LocaleRepository from '../domain/Locale.js';

const createContentsFrom = async (json) => {
  await createLocalesFrom(json);
  await createArticlesFrom(json);

  return await ContentsRepository.create(json);
};

const createLocalesFrom = async (json) => {
  if (!json.locales) {
    return;
  }
  const locales = await LocaleRepository.create(parseToMap(json.locales));
  json.locales = locales._id;
};

const createArticlesFrom = async (json) => {
  if (!json.articles) {
    return;
  }
  const articles = await Promise.all(
    json.articles.map(async (json) => {
      const article = await createOneArticleFrom(json);
      return article._id;
    }),
  );
  json.articles = articles;
};

const createOneArticleFrom = async (json) => {
  await createLocalesFrom(json);
  await createItemsFrom(json);
  await createCategoryLocalesFrom(json);
  return await ArticleRepository.create(json);
};

const createItemsFrom = async (json) => {
  if (!json.items) {
    return;
  }
  const items = await Promise.all(
    json.items.map(async (json) => {
      const item = await createOneItemFrom(json);
      return item._id;
    }),
  );
  json.items = items;
};

const createCategoryLocalesFrom = async (json) => {
  if (!json.categories) {
    return;
  }
  await Promise.all(
    json.categories.map(async (val) => {
      await createLocalesFrom(val);
    }),
  );
};

const createOneItemFrom = async (json) => {
  await createLocalesFrom(json);
  return await ItemRepository.create(json);
};

const parseToMap = (json) => {
  const map = new Map();
  for (const [key, val] of Object.entries(json)) {
    map.set(key, parseInner(val));
  }
  return map;
};

const parseInner = (json) => {
  const map = new Map();
  for (const [key, val] of Object.entries(json)) {
    map.set(key, val);
  }
  return map;
};

export default createContentsFrom;
