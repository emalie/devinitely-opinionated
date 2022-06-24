const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

/* This is creating a new schema for the user model. It is defining the fields that will be in the user
model. */
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    opinions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Opinion'
      }
    ],
    affiliate: {
        type: Boolean,
        required: true,
        default: false
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

/* This is a pre-save hook that will run before a user is saved to the database. It will check if the
user is new or if the password has been modified. If either of those conditions are true, it will
hash the password with bcrypt. */
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

/* This is a method that will be added to the user model. It will take in a password and compare it to
the hashed password in the database. */
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
