const express = require('express')
const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://olusmain:paR0r7oIQ82eM9PI@cluster0.ztby1wg.mongodb.net/?retryWrites=true&w=majority";


app.get('/', (req, res) => {
  res.send({ message: 'OK! passt!' })

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip)

  const database = client.db('iptracker');
  const collection = database.collection('ips');
  collection.insertOne({ ip: ip, date: new Date() });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})