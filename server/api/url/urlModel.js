var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
  longUrl: {
    type: String,
    required: true
  },
  shortUrl:{

      type: String,
      required: true,
      unique: true
  }
  

 
});

module.exports = mongoose.model('url', UrlSchema);
