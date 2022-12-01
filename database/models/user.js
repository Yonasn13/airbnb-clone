<<<<<<< HEAD
'use strict';
import { Connection } from '../connection';
const { Model, DataTypes } = require('sequelize');
const initUser = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Booking)
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

export default initUser(Connection, DataTypes)
=======
const { Model, DataTypes } = require('sequelize');
import connection from '../connection';

const initUser = (sequelize, DataTypes) => {
 class User extends Model {
   static associate(models) {
     User.hasMany(models.Flat);
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

export default initUser(connection, DataTypes);
>>>>>>> 2ddcccf693b02ba396c3018278594133c9cb1b1a
