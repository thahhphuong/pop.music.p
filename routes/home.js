const router =  require('express').Router();
const homeController = require('../controllers/Home.Controllers');

router.get('/', homeController.HOME);

module.exports = router;