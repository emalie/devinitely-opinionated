const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

/* Creating a new schema for the opinion model. */
const opinionSchema = new Schema(
  {
    opinionText: {
      type: String,
      required: 'Surely you have an opinion.',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    accepted: {
        type: Boolean,
        required: true,
        default: false
    },
    affiliateId: {
        type: String,
        required: false,
        trim: true,
        lowercase: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Opinion = model('Opinion', opinionSchema);

module.exports = Opinion;
