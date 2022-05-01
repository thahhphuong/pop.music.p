const router =  require('express').Router();
const tuitionController = require('../controllers/Tuition.Controllers');

router.get('/', tuitionController.GET_NAME);

module.exports = router;