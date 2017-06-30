import express from 'express'
import http from 'http'
import sampleData1 from './sampleData1.json'
import sampleData2 from './sampleData2.json'
import sampleData3 from './sampleData3.json'

const app = express()
const util = require('util');

app.use('/', express.static('public'))

async function fetchUserData(userId) {
  switch (userId) {
    default:
      return {}
    case 1:
      return sampleData1
    case 2:
      return sampleData2
    case 3:
      return sampleData3
  }
}

app.get('/get_user_data_with_id', async (req, res, next) => {
  try {
    console.log('Server Hit with para:', req.query.userId)
    switch (req.query.userId) {
      case '1':
        console.log('User1 data: ', JSON.stringify(sampleData1))
        res.status(200)
        res.send(JSON.stringify(sampleData1))
        break
      case '2':
        res.status(200)
        console.log('User2 data:', sampleData2)
        res.send(JSON.stringify(sampleData2))
        break
      case '3':
        res.status(200)
        console.log('User3 data:', sampleData3)
        res.send(JSON.stringify(sampleData3))
        break
      default:
        console.log('In default')
        res.status(200)
        res.send({})
        break
    }
  } catch (error) {
    res.status(400)
    res.send(error)
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})

