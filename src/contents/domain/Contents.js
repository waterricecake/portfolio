import mongoose from 'mongoose';
import { localesPopulate } from './Locale.js';
import { articlePopulate } from './Article.js';

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

const ContentsRepository = mongoose.model('Contents', ContentsSchema);
const contentsPopulate = [
  {
    path: 'locales',
    populate: localesPopulate,
  },
  {
    path: 'articles',
    populate: articlePopulate,
  },
];
export { ContentsRepository, contentsPopulate };
