var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/date', require('./date/timeStampRoutes'));
router.use('/whoami', require('./whoami/whoamiRoutes'));
router.use('/url', require('./urlshortener/urlShortenerRoutes'));

module.exports = router;
