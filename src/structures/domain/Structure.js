import mongoose from 'mongoose';
import { contentsPopulate } from '../../contents/domain/Contents.js';
import { structureCategoryPopulate } from './StructureCategory.js';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const StructureSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  sections: [
    {
      id: {
        type: String,
        required: true,
      },
      categoryId: {
        type: ObjectId,
        required: true,
      },
      faIcon: {
        type: String,
        required: true,
      },
      contentId: {
        type: ObjectId,
        ref: 'Contents',
      },
    },
  ],
  categories: [
    {
      type: ObjectId,
      ref: 'StructureCategory',
    },
  ],
});

const StructureRepository = mongoose.model('Structure', StructureSchema);
const structurePopulate = [
  {
    path: 'categories',
    populate: structureCategoryPopulate,
  },
];
export { StructureRepository, structurePopulate };
