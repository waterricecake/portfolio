import mongoose from 'mongoose';

const { Schema } = mongoose;

const EmailSchema = new Schema({
  publicKey: {
    type: String,
    required: true,
  },
  serviceId: {
    type: String,
    required: true,
  },
  templateId: {
    type: String,
    required: true,
  },
});

const Emails = mongoose.model('Email', EmailSchema);
export default Emails;
