const mongoose = require('mongoose'),
  schema = mongoose.Schema({
    _id: {
      type: String,
    },
  });
module.exports = mongoose.model('User', schema);
