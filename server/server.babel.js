import express from 'express'
import http from 'http'

const app = express()

app.use('/', express.static('public'))

async function fetchEmailData(userId) {
  http.request(
    'http://staging-cassandra-as-a-service-1432455979.us-east-1.elb.amazonaws.com/realtimeget/v1?uber=u_100989982',
    (response) => {

  }).on('Error', (e) => {
    console.log('Error: ', e)
  }).end()
}

async function fetchOrderData(userId) {
  http.request('someurl', (response) => {
    console.log('Response :', response.data)
  }).on('Error', (e) => {
    console.log('Error: ', e)
  }).end()
}

async function fetchCSData(userId) {
  http.request('someurl', (response) => {
    console.log('Response :', response.data)
  }).on('Error', (e) => {
    console.log('Error: ', e)
  }).end()
}

app.get('/get_user_data_with_id', async (req, res, next) => {
  try {
    const emailData = await fetchEmailData(req.query)
    const orderData = await fetchOrderData(req.query)
    const csData = await fetchCSData(req.query)
    console.log('Server hit with query:', req.query)
    res.status(200)
    res.send(emailData)
  } catch (error) {
    res.status(400)
    res.send(error)
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})

