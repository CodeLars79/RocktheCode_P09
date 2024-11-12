const Funko = require('../models/funko')
const funkos = require('../../../funkos.json')

const insertManyFunkos = async (req, res, next) => {
  try {
    await Funko.insertMany(funkos)
    console.log('Insertion successful 🚀')
    return res.status(201).json({ message: 'All funkos loaded to database 🚀' })
  } catch (error) {
    console.error('Error inserting funkos:', error)
    return res.status(500).json({ error: 'Failed to insert funkos' })
  }
}

const getAllFunkos = async (req, res, next) => {
  try {
    const allFunkos = await Funko.find()
    return res.status(200).json(allFunkos)
  } catch (error) {
    console.error('Error fetching funkos:', error)
    return res.status(500).json({ error: 'Failed to fetch funkos' })
  }
}

module.exports = {
  insertManyFunkos,
  getAllFunkos
}
