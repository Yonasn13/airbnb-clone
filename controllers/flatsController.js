import db from '../database/index'
import Booking from '../database/models/booking'

const flatsController = {
  all: async () => JSON.parse(JSON.stringify(await db.Flat.findAll())),
  find: async (id) => JSON.parse(JSON.stringify(await db.Flat.findOne({where: {id: id}, include: Booking})))
}

export default flatsController