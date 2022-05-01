const router =  require('express').Router();
const studyTimeController = require('../controllers/StudyTime.Controllers');

router.get('/', studyTimeController.GET_NAME);

module.exports = router;