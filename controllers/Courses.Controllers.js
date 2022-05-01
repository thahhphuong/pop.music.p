const Courses = require("../models/Courses");
const StudyTime = require("../models/StudyTime");
module.exports = {
   COURSES: async (req, res) => {
      try {
         const courses = await Courses.find_all();
         console.log({courses})
         res.render("courses", { courses_list: courses });
      } catch (e) {
         console.log(e);
      }
   },
   COURSES_DETAILS: async (req, res) => {
      const { id } = req.params;
      const detail_course = await Courses.find_one(id);
      const studytimeCourse = await StudyTime.find_one(id);
      const timeCourse = studytimeCourse.dataValues.session;
      //  console.log(timeCourse)
      // console.log(studytimeCourse.dataValues.session[0])
      res.render("courses-details", { detail_course, timeCourse, studytimeCourse });
   },
   GET_ALL: async (req, res) => {
      return await Courses.findAll();
   },
};
