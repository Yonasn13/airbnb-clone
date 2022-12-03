import db from '../database/index'
import { Op } from 'sequelize';

const bookingsController = {
  /*create: async (data) => {
    console.log(data)
    const startBooking = new Date(data.startDate);
    const endBooking = new Date(data.endDate);*/
    /* avoid booking overlapping
    1. booking starting in other booking
      startDate <= startBooking &&  endDate >= startBooking
    2. booking ending in other booking
      startDate <= endBooking &&  endDate >= endBooking
    3. booking range including pre-existing one
      startDate >= startBooking && endDate <= endBooking 
    */
      /*const existingBooking = await db.Booking.findOne({
      where: {
        [Op.and]: [
          { FlatId: data.FlatId },
          {
            [Op.or]: [
              {
                [Op.and]: [
                  { startDate: { [Op.lte]: startBooking } },
                  { endDate: { [Op.gte]: startBooking } }
                ]
              },
              {
                [Op.and]: [
                  { startDate: { [Op.lte]: endBooking } },
                  { endDate: { [Op.gte]: endBooking } },
                ]
              },
              {
                [Op.and]: [
                  { startDate: {[Op.gte]: startBooking } },
                  { endDate: {[Op.lte]: endBooking } }
                ]
              }
            ]
          }
        ]
      }
    })

    console.log(existingBooking)
    
    if (existingBooking) {
      return "error"
    }*/
    
    /*return await db.Booking.create(data)
  }*/
  create: async (data) => {
    const book = await db.Booking.create(data)
    return JSON.parse(JSON.stringify(book))
  }
}

export default bookingsController