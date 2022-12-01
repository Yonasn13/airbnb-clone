'use strict';
import { Connection } from '../connection';
const { Model, DataTypes } = require('sequelize');
const initFlat = (sequelize, DataTypes) => {
  class Flat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flat.belongsTO(models.User)
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

export default initFlat(Connection, DataTypes)