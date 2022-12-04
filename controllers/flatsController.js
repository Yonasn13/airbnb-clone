import db from '../database/index'


const flatsController = {
  all: async () => JSON.parse(JSON.stringify(await db.Flat.findAll())),
  find: async (id) => {
    const flat = await db.Flat.findByPk(id)
    return JSON.parse(JSON.stringify(flat))
  },
  create: async (data) => {
    const flat = await db.Flat.create(data)
    return JSON.parse(JSON.stringify(flat))
  }
}

export default flatsController