var router = require('express').Router();
var multer  = require('multer')
var upload = multer({ dest: './server/api/file/' })
var path=require('path');
router.route('/')
  .get(function(req, res){
    
    //res.sendFile( __dirname + "/fileupload.html" );
  // res.sendFile(path.resolve('client/fileupload.html'))
  res.sendFile('fileupload.html',  {root: './client'})

  });

 /* router.route('/')
  .post(upload.single('choose'),function(req, res){
console.log(req.file) 

    res.json({size:req.file});
  }); */
  router.post('/',upload.single('choose'),function(req,res){
    console.log(req.file)
   return  res.json({size:req.file.size+"byte"})
  })
  module.exports = router;