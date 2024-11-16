import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  srtlizeName: {
    type: String,
    required: false,
  },
  logoUrl: {
    type: String,
    default: 'images/svg/logo.svg',
  },
  profilePictureUrl: {
    type: String,
    default: 'images/pictures/avatar.jpg',
  },
  locales: {
    type: Map,
    of: new Schema({
      role: { type: String, required: true },
    }),
  },
});

const Profiles = mongoose.model('Profile', ProfileSchema);
export default Profiles;
