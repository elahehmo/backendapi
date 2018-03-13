var _URL = require('./urlModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.params = function(req, res, next, url) {

  var regex=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
if(regex.test(url)===true){

  var shortNum=Math.floor(Math.random()*10000 ).toString();
  var data=new _URL({
    longUrl:url,
    shortUrl:shortNum
  })
  data.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      req.data = {'original url':saved.longUrl, 'shorturl':saved.shortUrl};
      next();
    }
  });


}

else {

  _URL.findOne({'shortUrl':url} , function(err, result) {
   
  if(err)
{res.send("error reading database");
}
else if(result){
  var re=new RegExp("^(http|https)://","i");
  if(re.test(result.longUrl)){ res.redirect(result.longUrl)
  } else {res.redirect('http://'+result.longUrl)}
   
   }
    else{
      req.data={'original url':'invalid url', 'shorturl':url} ;
      
    }
    next();
 

  });

}
} 

exports.getOne = function(req, res, next) {
 
  res.json(req.data);
};


