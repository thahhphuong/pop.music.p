const StudyTime = require('../models/StudyTime').build();

module.exports = {
   GET_NAME: async (req, res) => {
      res.render('meetings');
   }
}