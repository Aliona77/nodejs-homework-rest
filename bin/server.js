const app = require('../app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const { DB_HOST, PORT } = process.env

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})

mongoose.connect(DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(error => {
    console.log(error)
    process.exit(1)
  })
