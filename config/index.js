const express = require('express');
const mongoose = require('mongoose')
const cors = require ('cors');
const routes = require('../routes')
require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

const PORT = process.env.DB_HOST || 3005

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://shamil:ytipsaewr3521@cluster0.psgl1.mongodb.net/instagram", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => {
      console.log(`Server has been started on port: ${PORT}`)
    })
  } catch (e) {
    console.log(e.message)
  }
}

start();
