
var qwant = require("qwant-api");

var imagemodel = require('./imageModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.getOne = function(req, res, next) {
logger.log('hello')
   var late=new imagemodel({
    terms:req.params.url,
    date:new Date()
    
    });
    console.log(late)
    late.save(function(err,saved){
    if(err) next(err)
    
    
    }) 
    



var ofset= Number(req.query);

var search=req.params.url;

var finalarr=[];
 
qwant.search("images", { query: search, count: 10, offset: ofset, language: "english" }, function(err, data){
  if (err) return console.log(err);

  
  var arr=data.data.result.items;
  arr.forEach(function(element) {
    
  var rez={title:"",snippet:"",thumbnail:"",context:""};
    rez.title=element.title;
    rez.snippet=element.media;
    rez.thumbnail=element.thumbnail;
    rez.context=element.url;
   
finalarr.push(rez);

  });
  
  res.json(finalarr)
});




};

exports.get = function(req, res, next) {
  var usersProjection = { 
    __v: false,
    _id: false
};
  imagemodel.find({},usersProjection,function(err,data){
    res.json(data)
  }).sort({_id: -1}).limit(5);








  
 };


