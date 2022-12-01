import db from "../database"

const bookingsController = {
 find: async (id) => {
   const booking =await db.User.findByPk(id)
   return JSON.parse(JSON.stringify(booking))
 },
 findAll: async () => {
   const bookings = await db.User.findAll()
   return JSON.parse(JSON.stringify(bookings))
 },
 create: async (data) => {
   const booking = await db.User.create(data)
   return JSON.parse(JSON.stringify(booking))
 }
}

export default bookingsController;