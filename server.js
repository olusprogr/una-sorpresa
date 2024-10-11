const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({ message: 'OK! working!' })

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})