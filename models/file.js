const mongoose = require('mongoose'),
  schema = mongoose.Schema({
    _id: {
      type: String
    },
    ownerId: {
      type : String,
      ref : 'User'
    },
    costCents: {
      type: Number,
    },
    filename: {
      type: String,
    },
    downloaders: [{
      type : String,
      ref : 'User'
    }]
  });
module.exports = mongoose.model('File', schema);
