const express = require('express')
const app = express()
const port = 3000

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://olusmain:paR0r7oIQ82eM9PI@cluster0.ztby1wg.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
  res.send({ message: 'Error! Seite konnte nicht geladen werden! Versuche erneut!' })

  console.log(req);

  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const requestInfo = {
    ip: ip,
    userAgent: req.headers['user-agent'],
    referer: req.headers['referer'],
    date: new Date()
  };

  const database = client.db('iptracker');
  const collection = database.collection('ips');
  collection.insertOne({date: new Date(), information: requestInfo});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})