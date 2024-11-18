import createContentsFrom from './ParseJsonToEntity.js';

const initContact = async () => {
  return await createContentsFrom({
    locales: {
      en: {
        title: 'Contact',
        title_long_prefix: "Don't hesitate to",
        title_long: '**Contact** Me',
      },

      es: {
        title: 'Contacto',
        title_long_prefix: 'No dudes en',
        title_long: '**Contácta**me',
      },

      fr: {
        title: 'Contact',
        title_long_prefix: "N'hésitez pas à",
        title_long: 'Me **Contacter**',
      },

      ko: {
        title: '연락처',
        title_long_prefix: '주저하지 말고',
        title_long: '**연락** 주세요',
      },
    },

    articles: [
      {
        id: 'contact_form',
        component: 'ArticleContactForm',
        config: {},
        locales: {
          en: { title: 'Send me a **message**' },
          es: { title: 'Envíame un **mensaje**' },
          fr: { title: 'Envoyez-moi un **message**' },
          ko: { title: '**메시지를** 보내주세요' },
        },

        items: null,
      },

      {
        id: 'contact_list',
        component: 'ArticleGrid',
        config: {
          format: 'grid',
        },
        locales: {
          en: { title: 'Or if you **prefer**...' },
          es: { title: 'O si **prefieres**...' },
          fr: { title: 'Ou si vous **préférez**...' },
          ko: { title: '또는 **원하시면**...' },
        },

        items: [
          {
            value: '+1 (123) 456-7890',
            links: [{ href: 'tel:11234567890' }],
            icon: {
              img: null,
              fa: 'fa-solid fa-phone',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: { title: 'Phone' },
              es: { title: 'Teléfono' },
              fr: { title: 'Téléphone' },
              ko: { title: '전화' },
            },
          },

          {
            value: 'mark.choi@email.com',
            links: [{ href: 'mailto:mark.choi@email.com' }],
            icon: {
              img: null,
              fa: 'fa-solid fa-envelope',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: { title: 'E-mail' },
              ko: { title: '이메일' },
            },
          },

          {
            value: '@markchoi',
            links: [{ href: 'https://linkedin.com' }],
            icon: {
              img: null,
              fa: 'fa-brands fa-linkedin',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: { title: 'Linkedin' },
            },
          },

          {
            value: 'Mark Choi',
            links: [{ href: 'https://facebook.com' }],
            icon: {
              img: null,
              fa: 'fa-brands fa-facebook',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: { title: 'Facebook' },
            },
          },

          {
            value: '@markchoi',
            links: [{ href: 'https://instagram.com' }],
            icon: {
              img: null,
              fa: 'fa-brands fa-instagram',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: { title: 'Instagram' },
            },
          },

          {
            value: '@markchoi',
            links: [{ href: 'https://tiktok.com' }],
            icon: {
              img: null,
              fa: 'fa-brands fa-tiktok',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: { title: 'TikTok' },
            },
          },
        ],
      },
    ],
  });
};

export default initContact;