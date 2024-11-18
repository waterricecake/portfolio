import mongoose from 'mongoose';

const {
  Schema,
  Types: { ObjectId },
} = mongoose;

const ItemSchema = new Schema({
  icon: {
    img: {
      type: String,
      default: null,
    },
    fa: {
      type: String,
      default: null,
    },
    faColors: {
      bg: {
        type: String,
        default: null,
      },
      fill: {
        type: String,
        default: null,
      },
    },
  },
  dates: {
    start: {
      type: String,
    },
    end: {
      type: String,
    },
  },
  links: {
    type: Array,
    of: {
      string: {
        type: String,
        required: false,
      },
      href: {
        type: String,
      },
    },
  },
  value: {
    type: String,
  },
  component: {
    type: String,
    required: false,
  },
  locales: {
    type: ObjectId,
    ref: 'Locale',
  },
  media: {
    youtueVideo: {
      type: String,
    },
    screenshots: {
      type: Array,
      of: {
        aspectRtop: {
          type: String,
          default: null,
        },
        images: {
          type: Array,
          of: String,
        },
      },
    },
  },
});

const ItemRepository = mongoose.model('Item', ItemSchema);
export default ItemRepository;
