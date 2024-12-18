import { StructureRepository } from '../domain/Structure.js';
import createStructureFrom from './StructureCreator.js';

const initStructure = async (contents) => {
  const hasData = await StructureRepository.countDocuments();
  if (hasData) {
    console.log('Structures data already init');
    return;
  }
  console.log('Init structure data');
  const json = structureMockJson;
  for (const section of json.sections) {
    section.contentId = contents[section.id]._id;
  }
  const structure = await createStructureFrom(json);
};

export default initStructure;

const structureMockJson = {
  userId: 1,
  sections: [
    {
      id: 'about',
      categoryId: 'home',
      jsonPath: '/data/sections/cover.json',
      faIcon: 'fa-solid fa-address-card',
    },

    {
      id: 'education',
      categoryId: 'background',
      jsonPath: '/data/sections/education.json',
      faIcon: 'fa-solid fa-graduation-cap',
    },

    {
      id: 'skills',
      categoryId: 'showcase',
      jsonPath: '/data/sections/skills.json',
      faIcon: 'fa-solid fa-tools',
    },

    {
      id: 'experience',
      categoryId: 'background',
      jsonPath: '/data/sections/experience.json',
      faIcon: 'fa-solid fa-briefcase',
    },

    {
      id: 'portfolio',
      categoryId: 'showcase',
      jsonPath: '/data/sections/portfolio.json',
      faIcon: 'fa-solid fa-folder-open',
    },

    {
      id: 'achievements',
      categoryId: 'showcase',
      jsonPath: '/data/sections/achievements.json',
      faIcon: 'fa-solid fa-award',
    },

    {
      id: 'updates',
      categoryId: 'more',
      jsonPath: '/data/sections/updates.json',
      faIcon: 'fa-solid fa-rss',
    },

    {
      id: 'contact',
      categoryId: 'more',
      jsonPath: '/data/sections/contact.json',
      faIcon: 'fa-solid fa-pen-to-square',
    },
  ],

  categories: [
    {
      id: 'home',
      faIcon: 'fa-solid fa-home',
      locales: {
        en: { title: 'Home' },
        es: { title: 'Inicio' },
        fr: { title: 'Accueil' },
        ko: { title: '홈페이지' },
      },
    },

    {
      id: 'background',
      faIcon: 'fa-solid fa-clock',
      locales: {
        en: { title: 'History' },
        es: { title: 'Trayectoria' },
        fr: { title: 'Parcours' },
        ko: { title: '경력' },
      },
    },

    {
      id: 'showcase',
      faIcon: 'fa-solid fa-images',
      locales: {
        en: { title: 'Showcase' },
        es: { title: 'Vitrina' },
        fr: { title: 'Vitrine' },
        ko: { title: '쇼케이스' },
      },
    },

    {
      id: 'more',
      faIcon: 'fa-solid fa-plus',
      locales: {
        en: { title: 'More' },
        es: { title: 'Más' },
        fr: { title: 'Plus' },
        ko: { title: '더보기' },
      },
    },
  ],
};
