var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/date', require('./date/timeStampRoutes'));
router.use('/whoami', require('./whoami/whoamiRoutes'));
router.use('/urlshort', require('./urlshortener/urlShortenerRoutes'));
router.use('/image', require('./image/imageRoutes'));
router.use('/url', require('./url/urlRoutes'));
router.use('/getfilesize',require('./file/fileRoutes'));

module.exports = router;
