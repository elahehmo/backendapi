
var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./imageController');
//router.param('url', controller.params);
 
  router.route('/imagesearch/:url(*)')
    .get(controller.getOne)


    router.route('/latestsearch')
    .get(controller.get)

module.exports = router;
