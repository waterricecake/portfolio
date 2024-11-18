import mongoose from 'mongoose';
import { localesPopulate } from './Locale.js';
import { itemPopulate } from './Item.js';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const ArticleSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: false,
  },
  config: {
    type: Map,
    of: String,
  },
  locales: {
    type: ObjectId,
    ref: 'Locale',
  },
  items: {
    type: Array,
    ref: 'Item',
  },
  categories: {
    type: Array,
    of: {
      id: {
        type: String,
        required: true,
      },
      locales: {
        type: ObjectId,
        of: 'Locale',
      },
    },
  },
});

const ArticleRepository = mongoose.model('Article', ArticleSchema);

const articlePopulate = [
  {
    path: 'locales',
    populate: localesPopulate,
  },
  {
    path: 'items',
    populate: itemPopulate,
  },
  {
    path: 'categories.locales',
    populate: localesPopulate,
  },
];
export { ArticleRepository, articlePopulate };
