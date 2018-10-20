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
    downloaders: [{
      type : String,
      ref : 'User'
    }]
  });
module.exports = mongoose.model('File', schema);
