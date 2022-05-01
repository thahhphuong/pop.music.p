const router =  require('express').Router();
const coursesController = require('../controllers/Courses.Controllers');

// Khóa học
router.get('/', coursesController.COURSES);

// Lấy tất cả khóa học
router.get('/all-courses', coursesController.GET_ALL);

// Chi tiết khóa học
router.get('/:id', coursesController.COURSES_DETAILS);

module.exports = router;