
'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize');
const initFlat = (sequelize, DataTypes) => {
  class Flat extends Model {
    static associate(models) {
      Flat.belongsTo(models.User);
      Flat.belongsToMany(models.User, { through: models.Booking })
    }
  }
  Flat.init({
    address: DataTypes.STRING,
    price: DataTypes.FLOAT,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Flat',
  });
  return Flat;
};

export default initFlat(connection, DataTypes);
