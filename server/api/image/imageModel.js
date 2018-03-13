

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var imageSchema = new Schema({
  terms: {
    type: String,
    required: true
  },
  date:{

      type: Date,
      required: true,
     
  }
  

 
});


module.exports = mongoose.model('image', imageSchema);
