import mongoose from 'mongoose';
import { localesPopulate } from '../../contents/domain/Locale.js';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const StructureCategorySchema = new Schema({
  faIcon: {
    type: String,
  },
  locales: {
    type: ObjectId,
    ref: 'Locale',
  },
});

const StructureCategoryRepository = mongoose.model(
  'StructureCategory',
  StructureCategorySchema,
);

const structureCategoryPopulate = [
  {
    path: 'locales',
    populate: localesPopulate,
  },
];
export { StructureCategoryRepository, structureCategoryPopulate };
