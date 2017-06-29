import express from 'express'

const app = express()

app.use('/', express.static('public'))

app.get('/get_image', async (req, res, next) => {
  try {
    const statement = await "This is the reponse"
    res.status(200)
    res.send(statement)
  } catch (error) {
    res.status(400)
    res.send(error)
    next(util.inspect(error))
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${process.env.PORT || 3000}`)
})

