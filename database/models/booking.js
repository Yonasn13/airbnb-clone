<<<<<<< HEAD
'use strict';
import { Connection } from '../connection';
const { Model, DataTypes } = require('sequelize');
const initBooking = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Flat)
    }
  }
  Booking.init({
    userId: DataTypes.INTEGER,
    flatId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};

export default initBooking(Connection, DataTypes)
=======
const { Model, DataTypes } = require('sequelize');
import connection from '../connection';

const initBooking = (sequelize, DataTypes) => {
 class Booking extends Model {
   static associate(models) {
     Booking.belongsTo(models.User);
   }
 }
 Booking.init({
   userId: DataTypes.INTEGER,
   flatId: DataTypes.INTEGER,
   startDate: DataTypes.DATE,
   enddate: DataTypes.DATE,
   confirmed: DataTypes.BOOLEAN
 }, {
   sequelize,
   modelName: 'Booking',
 });
 return Booking;
};

export default initUser(connection, DataTypes);
>>>>>>> 2ddcccf693b02ba396c3018278594133c9cb1b1a
