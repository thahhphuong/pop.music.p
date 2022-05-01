const { Model, Sequelize, DataTypes } = require('sequelize');
const db = require('./connect');
const StudyTime = require('./StudyTime');

const Courses = db.define( 'courses', {
   id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
   },
   name: {
      type: DataTypes.STRING,
      allowNull: false
   },
   content: {
      type: DataTypes.STRING,
      allowNull: false
   },
   training_time: {
      type: DataTypes.STRING(100),
      allowNull: false
   },
   start_time: {
      type: DataTypes.DATE,
      allowNull: true
   },
   poster: {
      type: DataTypes.STRING,
      allowNull: false
   },
   keyword: {
      type: DataTypes.STRING,
      allowNull: false
   }
}, {
   createdAt: false,
   updatedAt: false,
   timestamps: false
});

// Courses.hasMany(StudyTime);

module.exports = {
   find_all: () => {
      return Courses.findAll({
         raw:true
      });
   },
   find_one: (id) => {
      return Courses.findByPk(id);
   }
};