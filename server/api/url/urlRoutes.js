var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./urlController');

router.param('url', controller.params);
 
  router.route('/:url(*)')
    .get(controller.getOne)




module.exports = router;
