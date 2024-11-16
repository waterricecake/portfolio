import mongoose from 'mongoose';

const { Schema } = mongoose;
const StatusSchema = new Schema({
  visible: {
    type: Boolean,
    default: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  locales: {
    type: Map,
    of: new Schema({
      message: {
        type: String,
        required: true,
      },
    }),
  },
});

const Status = mongoose.model('Status', StatusSchema);
export default Status;
