const { Model, Sequelize, DataTypes } = require('sequelize');
const db = require('./connect');
const Courses = require('./Courses');

const Tuition = db.define('tuitions', {
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
   cost: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   sessions: {
      type: DataTypes.INTEGER,
      allowNull: false
   },
   minutes_per_session: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
});
// Tuition.has
// Tuition.associate = (models) =>{
//    StudyTime.hasOne(Courses, { foreignKey: { name: 'course_id' } });
// };

module.exports = {
   find_one: (id) => {
      return Tuition.findOne(id);
   }
};