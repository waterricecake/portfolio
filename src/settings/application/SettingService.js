import Settings from './../domains/SettingSchema.js';
import mongoose from 'mongoose';

const getSetting = async (userId) => {
  const setting = await Settings.findOne({ userId: userId }).populate([
    'preloader',
    'profile',
    'status',
    {
      path: 'supportedLanguages',
    },
    'emailjs',
  ]);
  return setting;
};

export default getSetting;
