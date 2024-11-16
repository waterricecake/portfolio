import Settings from './../domains/SettingSchema.js';
import Emails from './../domains/EmailSchema.js';
import Preloaders from './../domains/PreloaderSchema.js';
import Profiles from './../domains/ProfileSchema.js';
import Status from './../domains/StatusSchema.js';
import SupportedLanguages from './../domains/SupportedLanguagesSchema.js';

const initSettingDatas = async () => {
  const hasData = await Settings.countDocuments();
  if (hasData) {
    console.log('Setting datas already init');
    return;
  }
  console.log('Init Setting Datas');
  await setSettingsTestData();
};
const setSettingsTestData = async () => {
  const preloader = await setPreloaderTestData();
  const profile = await setProfileTestData();
  const status = await setStatusTestData();
  const supportedLanguages = await setSupportedLanguaesTestData();
  const emailjs = await setEmailsTestData();
  const setting = await Settings.create({
    userId: 1,
    version: '1.0.0',
    animatedCursorEnabled: true,
    fullScreenButtonEnabled: true,
    preloader: preloader._id,
    profile: profile._id,
    status: status._id,
    supportedLanguages: supportedLanguages,
    emailjs: emailjs._id,
  });
  return setting;
};

const setEmailsTestData = async () => {
  return await Emails.create({
    publicKey: 'tzObcsmOwHvPy6Rhp',
    serviceId: 'service_4h8g7vb',
    templateId: 'template_seyjkzn',
  });
};

const setPreloaderTestData = async () => {
  return await Preloaders.create({
    enabled: false,
    title: 'React <b>Portfolio</b>',
    subtitle: 'by Ryan Balieiro',
  });
};

const setProfileTestData = async () => {
  return await Profiles.create({
    name: 'Mark Choi',
    stylizedName: '<strong>Mark **Choi**</strong>',
    logoUrl: 'images/svg/logo.svg',
    profilePictureUrl: 'images/pictures/avatar.jpg',

    locales: {
      en: { role: 'Web Developer' },
      es: { role: 'Desarrollador Web' },
      fr: { role: 'Développeur Web' },
      ko: { role: '웹 개발자' },
    },
  });
};

const setStatusTestData = async () => {
  return await Status.create({
    visible: true,
    available: true,

    locales: {
      en: { message: 'Available for freelance!' },
      es: { message: '¡Disponible para freelance!' },
      fr: { message: 'Disponible pour freelance !' },
      ko: { message: '프리랜스 가능합니다!' },
    },
  });
};

const setSupportedLanguaesTestData = async () => {
  return [
    await SupportedLanguages.create({
      name: 'English',
      id: 'en',
      flagUrl: 'images/flags/en.png',
      default: true,
    }),
    await SupportedLanguages.create({
      name: 'Español',
      id: 'es',
      flagUrl: 'images/flags/es.png',
    }),
    await SupportedLanguages.create({
      name: 'Français',
      id: 'fr',
      flagUrl: 'images/flags/fr.png',
    }),
    await SupportedLanguages.create({
      name: '한국어',
      id: 'ko',
      flagUrl: 'images/flags/ko.png',
    }),
  ];
};

export default initSettingDatas;
