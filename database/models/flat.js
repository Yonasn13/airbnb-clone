const { Model, DataTypes } = require('sequelize');
import connection from '../connection';

const initFlat = (sequelize, DataTypes) => {
 class Flat extends Model {
   static associate(models) {
     Flat.belongsTo(models.User);
   }
 }
 Flat.init({
   address: DataTypes.STRING,
   price: DataTypes.FLOAT,
   userId: DataTypes.INTEGER
 }, {
   sequelize,
   modelName: 'Flat',
 });
 return Flat;
};

export default initUser(connection, DataTypes);