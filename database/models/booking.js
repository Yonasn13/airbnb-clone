const { Model, DataTypes } = require('sequelize');
import connection from '../connection';

const initBooking = (sequelize, DataTypes) => {
 class Booking extends Model {
   static associate(models) {
     Booking.belongsTo(models.User);
     Booking.belongsTo(models.Flat);
   }
 }
 Booking.init({
   UserId: DataTypes.INTEGER,
   FlatId: DataTypes.INTEGER,
   startDate: DataTypes.DATE,
   enddate: DataTypes.DATE,
   confirmed: DataTypes.BOOLEAN
 }, {
   sequelize,
   modelName: 'Booking',
 });
 return Booking;
};

export default initBooking(connection, DataTypes);