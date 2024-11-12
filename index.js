require('dotenv').config()
const funkoRouter = require('./src/api/routes/funko')
const { connectDB } = require('./src/config/db')
const express = require('express')
const cors = require('cors')

const app = express()
connectDB()

app.use(cors())
app.use(express.json())

app.use('/api/v1/funkos', funkoRouter)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

app.listen(3000, () => {
  console.log('The server is working at: http://localhost:3000 👍')
})
