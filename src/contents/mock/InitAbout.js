import ArticleRepository from '../domain/Article.js';
import ContentsRepository from '../domain/Contents.js';
import ItemRepository from '../domain/Item.js';
import LocaleRepository from '../domain/Locale.js';
import localeRepository from '../domain/Locale.js';

const initAbout = async () => {
  const locales = await createLocales();
  const articles = await createArticles();
  return await ContentsRepository.create({
    locales: locales._id,
    articles: articles._id,
  });
};

const createLocales = async () => {
  return await localeRepository.create({
    en: {
      title: 'Welcome!',
      title_menu: 'About me',
      title_long_prefix: 'Hello...',
      title_long: "I'm **Mark Choi!**",
    },

    es: {
      title: '¡Saludos!',
      title_menu: 'Sobre mí',
      title_long_prefix: 'Hola...',
      title_long: 'Soy **Mark Choi!**',
    },

    fr: {
      title: 'Salut !',
      title_menu: 'À propos',
      title_long_prefix: 'Salut...',
      title_long: 'Je suis **Mark Choi!**',
    },

    ko: {
      title: '환영합니다!',
      title_menu: '소개',
      title_long_prefix: '안녕하세요...',
      title_long: '저는 **Mark Choi** 입니다!',
    },
  });
};

const createArticles = async () => {
  return [
    await ArticleRepository.create({
      id: 'contact_list',
      component: 'ArticleGrid',
      config: {
        ignorePaddingTop: true,
        format: 'inline',
      },
      locales: await LocaleRepository.create(
        parseToMap([
          ['en', {}],
          ['es', {}],
          ['fr', {}],
          ['ko', {}],
        ]),
      )._id,
      items: [
        await ItemRepository.create({
          value: 'Cupertino – CA',
          links: [{ href: null }],
          icon: {
            img: null,
            fa: 'fa-solid fa-city',
            faColors: { bg: null, fill: null },
          },
        }),
        await ItemRepository.create({
          value: 'mark.choi@dev.com',
          links: [{ href: 'mailto:mark.choi@dev.com' }],
          icon: {
            img: null,
            fa: 'fa-solid fa-envelope',
            faColors: { bg: null, fill: null },
          },
        }),
        await ItemRepository.create({
          value: '@ryanbalieiro',
          links: [{ href: 'https://github.com/ryanbalieiro' }],
          icon: {
            img: null,
            fa: 'fa-brands fa-github',
            faColors: { bg: null, fill: null },
          },
        }),
      ],
    }),
    await ArticleRepository.create({
      id: 'short_description',
      component: 'ArticleInfoBlock',
      config: {},
      locales: await LocaleRepository.create(
        parseToMap({
          en: { title: '**A little bit** about me...' },
          es: { title: '**Un poco** sobre mí...' },
          fr: { title: '**Un peu** à propos de moi...' },
          ko: { title: '저에 **대해 조금**...' },
        }),
      )._id,
    }),
  ];
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
export default initAbout;
