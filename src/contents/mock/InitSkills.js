import createContentsFrom from './ContentsCreator.js';

const initSkills = async () => {
  return await createContentsFrom({
    locales: {
      en: {
        title: 'Skills',
        title_long_prefix: 'Explore',
        title_long: 'My **Skill Set**',
      },

      es: {
        title: 'Habilidades',
        title_long_prefix: 'Explora',
        title_long: 'Mis **Habilidades**',
      },

      fr: {
        title: 'Capacités',
        title_long_prefix: 'Explorez',
        title_long: 'Mes **Compétences**',
      },

      ko: {
        title: '스킬',
        title_long_prefix: '이것은 내',
        title_long: '**스킬**입니다',
      },
    },

    articles: [
      {
        id: 'capabilities',
        component: 'ArticleCards',
        config: {},
        locales: {},

        items: [
          {
            icon: {
              img: null,
              fa: 'fa-solid fa-table-columns',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: {
                title: '**Website** design',
                text: 'I can bring your best ideas into life!',
              },
              es: {
                title: 'Diseño de **sitios web**',
                text: '¡Puedo hacer realidad tus mejores ideas!',
              },
              fr: {
                title: 'Conception de **sites web**',
                text: 'Je peux donner vie à vos meilleures idées !',
              },
              ko: {
                title: '**웹사이트** 디자인',
                text: '당신의 최고의 아이디어를 실현시킬 수 있습니다!',
              },
            },
          },

          {
            icon: {
              img: null,
              fa: 'fa-solid fa-database',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: {
                title: '**Database** management',
                text: 'I can handle your data effectively!',
              },
              es: {
                title: 'Gestión de **bases de datos**',
                text: '¡Puedo gestionar tus datos de manera eficaz!',
              },
              fr: {
                title: 'Gestion de **bases de données**',
                text: 'Je peux gérer vos données efficacement !',
              },
              ko: {
                title: '**데이터베이스** 관리',
                text: '데이터를 효과적으로 처리할 수 있습니다!',
              },
            },
          },

          {
            icon: {
              img: null,
              fa: 'fa-solid fa-mobile-screen-button',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: {
                title: '**App** creation',
                text: 'I can make creative and innovative apps!',
              },
              es: {
                title: 'Creación de **aplicaciones**',
                text: '¡Puedo crear aplicaciones creativas e innovadoras!',
              },
              fr: {
                title: "Création d'**applications**",
                text: 'Je peux créer des applications créatives et innovantes !',
              },
              ko: {
                title: '**앱** 제작',
                text: '창의적이고 혁신적인 앱을 만들 수 있습니다!',
              },
            },
          },

          {
            icon: {
              img: null,
              fa: 'fa-solid fa-window-restore',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: {
                title: 'REST **APIs**',
                text: 'I can build API services!',
              },
              es: {
                title: 'APIs **REST**',
                text: '¡Puedo crear servicios API!',
              },
              fr: {
                title: 'APIs **REST**',
                text: 'Je peux créer des services API !',
              },
              ko: {
                title: 'REST **API**',
                text: 'API 서비스를 구축할 수 있습니다!',
              },
            },
          },

          {
            icon: {
              img: null,
              fa: 'fa-solid fa-lock',
              faColors: { bg: null, fill: null },
            },
            locales: {
              en: {
                title: 'Information **Security**',
                text: 'Security is my middle name!',
              },
              es: {
                title: '**Seguridad** de la información',
                text: '¡La seguridad es mi segundo nombre!',
              },
              fr: {
                title: "**Sécurité** de l'information",
                text: 'La sécurité est mon deuxième prénom !',
              },
              ko: {
                title: '정보 **보안**',
                text: '보안은 제 전문 분야입니다!',
              },
            },
          },
        ],
      },

      {
        id: 'backend_programming',
        component: 'ArticleList',
        config: {},
        locales: {
          en: { title: 'Backend' },
        },

        items: [
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-node-js',
              faColors: { bg: '#339933', fill: '#EEE' },
            },
            value: 95,
            dates: {
              start: '01/15/2019',
            },
            locales: {
              en: {
                title: 'Node.js',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-java',
              faColors: { bg: '#007396', fill: '#EEE' },
            },
            value: 90,
            dates: {
              start: '03/10/2019',
            },
            locales: {
              en: {
                title: 'Java 11+',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-python',
              faColors: { bg: '#306998', fill: '#EEE' },
            },
            value: 85,
            dates: {
              start: '06/20/2020',
            },
            locales: {
              en: {
                title: 'Python 3.x',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-solid fa-gem',
              faColors: { bg: '#CC0000', fill: '#EEE' },
            },
            value: 80,
            dates: {
              start: '08/30/2020',
            },
            locales: {
              en: {
                title: 'Ruby on Rails',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-solid fa-database',
              faColors: { bg: '#4479A1', fill: '#EEE' },
            },
            value: 90,
            dates: {
              start: '10/10/2020',
            },
            locales: {
              en: {
                title: 'MySQL',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-docker',
              faColors: { bg: '#2496ED', fill: '#EEE' },
            },
            value: 60,
            dates: {
              start: '04/15/2021',
            },
            locales: {
              en: {
                title: 'Docker',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-php',
              faColors: { bg: '#FFD700', fill: '#111' },
            },
            value: 100,
            dates: {
              start: '09/01/2018',
            },
            locales: {
              en: {
                title: 'PHP 8.0+',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-solid fa-life-ring',
              faColors: { bg: '#326CE5', fill: '#EEE' },
            },
            value: 80,
            dates: {
              start: '07/10/2021',
            },
            locales: {
              en: {
                title: 'Kubernetes',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-solid fa-server',
              faColors: { bg: '#47A248', fill: '#EEE' },
            },
            value: 50,
            dates: {
              start: '05/20/2024',
            },
            locales: {
              en: {
                title: 'MongoDB',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-git',
              faColors: { bg: '#F05032', fill: '#111' },
            },
            value: 95,
            dates: {
              start: '01/01/2018',
            },
            locales: {
              en: {
                title: 'Git',
                info: null,
              },
            },
          },
        ],
      },

      {
        id: 'front_end_programming',
        component: 'ArticleList',
        config: {},
        locales: {
          en: { title: 'Frontend' },
        },

        items: [
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-html5',
              faColors: { bg: '#E34F26', fill: '#EEE' },
            },
            value: 100,
            dates: {
              start: '09/01/2018',
            },
            locales: {
              en: {
                title: 'HTML5',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-css3',
              faColors: { bg: '#1572B6', fill: '#EEE' },
            },
            value: 65,
            dates: {
              start: '01/15/2019',
            },
            locales: {
              en: {
                title: 'CSS3',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-js',
              faColors: { bg: '#F7DF1E', fill: '#111' },
            },
            value: 90,
            dates: {
              start: '03/10/2020',
            },
            locales: {
              en: {
                title: 'JavaScript ES6+',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-react',
              faColors: { bg: '#61DAFB', fill: '#111' },
            },
            value: 95,
            dates: {
              start: '06/20/2020',
            },
            locales: {
              en: {
                title: 'React',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-vuejs',
              faColors: { bg: '#4FC08D', fill: '#111' },
            },
            value: 40,
            dates: {
              start: '08/30/2023',
            },
            locales: {
              en: {
                title: 'Vue.js',
                info: null,
              },
            },
          },
          {
            icon: {
              img: null,
              fa: 'fa-brands fa-bootstrap',
              faColors: { bg: '#7952B3', fill: '#EEE' },
            },
            value: 90,
            dates: {
              start: '02/10/2021',
            },
            locales: {
              en: {
                title: 'Bootstrap',
                info: null,
              },
            },
          },
        ],
      },

      {
        id: 'languages',
        component: 'ArticleList',
        config: {},
        locales: {
          en: { title: 'Languages' },
          es: { title: 'Idiomas' },
          fr: { title: 'Langues' },
          ko: { title: '언어' },
        },

        items: [
          {
            icon: {
              img: 'images/flags/en.png',
              fa: null,
              faColors: { bg: null, fill: null },
            },
            value: null,
            dates: { start: null },
            locales: {
              en: {
                title: 'English',
                info: 'Native speaker with excellent communication and writing skills.',
                tags: ['Native'],
              },
              es: {
                title: 'Inglés',
                info: 'Hablante nativo con excelentes habilidades de comunicación y escritura.',
                tags: ['Nativo'],
              },
              fr: {
                title: 'Anglais',
                info: "Locuteur natif avec d'excellentes compétences en communication et en rédaction.",
                tags: ['Natif'],
              },
              ko: {
                title: '영어',
                info: '모국어 수준의 의사소통 및 글쓰기 능력을 보유.',
                tags: ['모국어'],
              },
            },
          },

          {
            icon: {
              img: 'images/flags/fr.png',
              fa: null,
              faColors: { bg: null, fill: null },
            },
            value: null,
            dates: { start: null },
            locales: {
              en: {
                title: 'French',
                info: 'Fluent in both spoken and written French; confident in professional communication.',
                tags: ['Fluent'],
              },
              es: {
                title: 'Francés',
                info: 'Fluido en francés hablado y escrito; seguro en la comunicación profesional.',
                tags: ['Fluido'],
              },
              fr: {
                title: 'Français',
                info: "Fluent à l'oral et à l'écrit; confiant dans la communication professionnelle.",
                tags: ['Courant'],
              },
              ko: {
                title: '프랑스어',
                info: '구어 및 문어에 유창하며, 전문적인 소통에 자신감이 있음.',
                tags: ['유창'],
              },
            },
          },

          {
            icon: {
              img: 'images/flags/vn.png',
              fa: null,
              faColors: { bg: null, fill: null },
            },
            value: null,
            dates: { start: null },
            locales: {
              en: {
                title: 'Vietnamese',
                info: 'Intermediate proficiency in Vietnamese language; can hold conversations and understand written text.',
                tags: ['Intermediate'],
              },
              es: {
                title: 'Vietnamita',
                info: 'Competencia intermedia en el idioma vietnamita; puede mantener conversaciones y entender textos escritos.',
                tags: ['Intermedio'],
              },
              fr: {
                title: 'Vietnamien',
                info: 'Compétence intermédiaire en vietnamien; peut tenir des conversations et comprendre des textes écrits.',
                tags: ['Intermédiaire'],
              },
              ko: {
                title: '베트남어',
                info: '중간 수준의 베트남어 실력; 대화 가능 및 글을 이해할 수 있음.',
                tags: ['중급'],
              },
            },
          },

          {
            icon: {
              img: 'images/flags/ko.png',
              fa: null,
              faColors: { bg: null, fill: null },
            },
            value: null,
            dates: { start: null },
            locales: {
              en: {
                title: 'Korean',
                info: 'Basic understanding of Korean; learning and improving.',
                tags: ['Basic'],
              },
              es: {
                title: 'Coreano',
                info: 'Comprensión básica del coreano; aprendiendo y mejorando.',
                tags: ['Básico'],
              },
              fr: {
                title: 'Coréen',
                info: 'Compréhension de base du coréen; en apprentissage et amélioration.',
                tags: ['Basique'],
              },
              ko: {
                title: '한국어',
                info: '기초적인 한국어 이해; 배우는 중이며 향상 중.',
                tags: ['기초'],
              },
            },
          },
        ],
      },
    ],
  });
};

export default initSkills;
