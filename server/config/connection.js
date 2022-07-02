const mongoose = require('mongoose');

/* This is connecting to the database. */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/the-opinionated-dev', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

