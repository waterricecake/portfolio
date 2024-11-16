import mongoose from 'mongoose';

const { Schema } = mongoose;

const SupportedLanguageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  flagUrl: {
    type: String,
    required: true,
  },
  default: {
    type: Boolean,
    default: false,
  },
});

const SupportedLanguages = mongoose.model(
  'SupportedLanguage',
  SupportedLanguageSchema,
);
export default SupportedLanguages;
