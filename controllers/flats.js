import db from "../database"

const flatsController = {
 find: async (id) => {
   const flat = await db.Flat.findByPk(id)
   return JSON.parse(JSON.stringify(flat))
 },
 findAll: async () => {
   const flats = await db.Flat.findAll()
   return JSON.parse(JSON.stringify(flats))
 },
 create: async (data) => {
   const flat = await db.Flat.create(data)
   return JSON.parse(JSON.stringify(flat))
 }
}

export default flatsController;