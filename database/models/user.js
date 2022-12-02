
'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize');
const initUser = (sequelize, DataTypes) => {

  class User extends Model {
    static associate(models) {
      User.hasMany(models.Flat);
      User.belongsToMany(models.Flat, { through: models.Booking })
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default initUser(connection, DataTypes)