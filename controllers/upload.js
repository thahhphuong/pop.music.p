const Courses = require('../models/Courses');

module.exports = {
    GET_PAGE: async (req, res) => {
        res.render('upload');
    },
    UPLOAD: async (req, res) => {
        const posterData = req.files;
        const urls = [];
        if (user.length > 0) {
          const uploader = async (path) => await cloudinary.uploads(path, 'poster');
          for (const file of posterData) {
            const { path } = file;
            const newPath = await uploader(path);
            urls.push(newPath);
            fs.unlinkSync(path);
          };
        }
        console.log(urls);
        res.render('upload');
   },
   GET_ALL: async (req, res) => {
      return await Courses.findAll();
   }
}