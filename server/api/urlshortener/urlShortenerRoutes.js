var router = require('express').Router();
var logger = require('../../util/logger');
var googl = require('goo.gl');

//using googl.gl package to shorten url
router.route('/:url(*)')
  .get(function(req, res){

var _url={ "original_url":" ", "short_url":" " };
var erurl={"error":"url is invalid"};
var urlparam=req.params.url;

var regex=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
if(regex.test(urlparam)===true){
  logger.log("Successful match");
  _url.original_url=urlparam;  


  googl.setKey(process.env.google_api);
 
  // Get currently set developer key 
  var goo=googl.getKey();
  console.log(goo);
   
  // Shorten a long url and output the result 
 googl.shorten(urlparam)
      .then(function (shortUrl) {
        console.log(urlparam);
          console.log("short url:"+shortUrl);
        
          //_url.short_url= "<!DOCTYPE html><html><head></head><body><a target=\"_blank\" href="+shortUrl+">"+shortUrl+"</a></body></html>";
          _url.short_url=shortUrl;
         
          res.send(JSON.stringify(_url));
      })
      .catch(function (err) {
          console.error(err.message);
          res.json(_url);
      });
      //expand a short url and output the result 
       googl.expand(urlparam)
      .then(function (longUrl) {
          console.log("long url:"+longUrl);
          _url.original_url=longUrl;
          _url.short_url=urlparam;
         
          res.send(JSON.stringify(_url));
      })  .catch(function (err) {
        console.error(err.message);
    });
  


 

}else{
  logger.log("No match");
  res.json(erurl);
}


  

  });

module.exports = router;
