import mongoose from 'mongoose';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const LocaleSchema = new Schema({
  type: Map,
  of: {
    type: Map,
    of: String,
  },
});

const LocaleRepository = mongoose.model('Locale', LocaleSchema);
export default LocaleRepository;
