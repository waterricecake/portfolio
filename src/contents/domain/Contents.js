import mongoose from 'mongoose';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const ContentsSchema = new Schema({
  locales: {
    type: ObjectId,
    ref: 'Locale',
  },
  articles: {
    type: Array,
    ref: 'Article',
    default: null,
  },
});

const ContentsRepository = mongoose.model('Contens', ContentsSchema);
export default ContentsRepository;
