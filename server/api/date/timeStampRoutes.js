var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/:date')
  .get(function(req, res){
    logger.log('date!');
    var dateValue={"unix":"","natural":""};
    var dateFormattingOption={year:"numeric",month:"long",day:"numeric"};
    var recievedDate=req.params.date;
 
    if(isNaN(recievedDate)){
dateValue.natural=new Date(recievedDate).toLocaleDateString("en-us",dateFormattingOption);
dateValue.unix=(new Date(recievedDate).getTime())/1000;



    }
    else{
      dateValue.unix=recievedDate;
      dateValue.natural=new Date(recievedDate*1000).toLocaleDateString("en-us",dateFormattingOption);
    
    }
    res.send(dateValue);
  });

module.exports = router;
////
//{ "unix": 1450137600, "natural": "December 15, 2015" }