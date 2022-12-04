
'use strict';
import connection from '../connection';
const { Model, DataTypes } = require('sequelize');
const initBooking = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User);
      Booking.belongsTo(models.Flat, {foreignKey: 'FlatId'});
    }
  }
  Booking.init({
    UserId: DataTypes.INTEGER,
    FlatId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};

export default initBooking(connection, DataTypes);
