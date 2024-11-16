import mongoose from 'mongoose';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const SettingSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  version: {
    type: String,
    default: '1.0.0',
  },
  animatedCursorEnabled: {
    type: Boolean,
    default: true,
  },
  fullScreenButtonEnabled: {
    type: Boolean,
    default: true,
  },
  preloader: {
    type: ObjectId,
    required: true,
    ref: 'Preloader',
  },
  profile: {
    type: ObjectId,
    requierd: true,
    ref: 'Profile',
  },
  status: {
    type: ObjectId,
    requierd: true,
    ref: 'Status',
  },
  supportedLanguages: [
    {
      type: ObjectId,
      ref: 'SuportedLanguage',
    },
  ],
  emailjs: {
    type: ObjectId,
    required: true,
    ref: 'Email',
  },
});

const Settings = mongoose.model('Setting', SettingSchema);
export default Settings;
