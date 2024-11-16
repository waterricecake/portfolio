import Settings from './../domains/SettingSchema.js';

const getSetting = async (userId) => {
  const setting = await Settings.find({ userId: userId });
  return setting;
};

const requestQuery = async (query) => {
  try {
    query;
  } catch (err) {
    console.erro(err);
  }
};

export default getSetting;
