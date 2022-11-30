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