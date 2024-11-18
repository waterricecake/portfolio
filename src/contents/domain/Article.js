import mongoose from 'mongoose';

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
export default ArticleRepository;
