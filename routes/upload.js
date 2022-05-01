const router =  require('express').Router();
const uploadControllers = require('../controllers/upload');
const upload = require('../multer');

// Khóa học
router.get('/', uploadControllers.GET_PAGE);

// Lấy tất cả khóa học
router.post('/create', upload.array('poster'), uploadControllers.UPLOAD);

module.exports = router;