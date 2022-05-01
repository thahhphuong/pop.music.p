const Tuition = require('../models/Tuition').build();

module.exports = {
   GET_NAME: async (req, res) => {
     res.render("meeting-details");
   }
}