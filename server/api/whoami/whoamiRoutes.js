var router = require('express').Router();
var logger = require('../../util/logger');


// setup boilerplate route jsut to satisfy a request
// for building

router.route('/')
  .get(function(req, res){


    var prop={"ipaddress":"","language":"","software":""}
    prop.ipaddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
    prop.software=req.useragent.os+',browser'+req.useragent.browser;
    prop.language=req.acceptsLanguages()[0];
  res.send(prop);


  });

module.exports = router;
////
//{ "unix": 1450137600, "natural": "December 15, 2015" }