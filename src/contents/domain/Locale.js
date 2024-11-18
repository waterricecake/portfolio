import mongoose from 'mongoose';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const LocaleSchema = new Schema({}, { strict: false });

const LocaleRepository = mongoose.model('Locale', LocaleSchema);

const localesPopulate = [];
export { LocaleRepository, localesPopulate };
