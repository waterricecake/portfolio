import mongoose from 'mongoose';

const { Schema } = mongoose;

const PreloaderSchema = new Schema({
  enable: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
});

const Preloaders = mongoose.model('Preloader', PreloaderSchema);
export default Preloaders;
