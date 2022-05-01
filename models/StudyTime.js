const { Model, Sequelize, DataTypes } = require('sequelize');
const db = require('./connect');
const Courses = require('./Courses');

const StudyTime = db.define('study_times', {
   id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
   },
   course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   start: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   end: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   session: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: false
   }
});

// StudyTime.belongsTo(Courses, { foreignKey: { name:'course_id' } });

module.exports = {
   find_one: (id) => {
      return StudyTime.findByPk(id);
   }
};