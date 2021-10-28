const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const path = require("path");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use(express.json({extended: false}));
app.use(express.static("public"));
const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));

 app.use('/api/users', require('./api/users'));
 app.use('/api/posts', require('./api/posts'));
 app.use('/api/profile', require('./api/profile'));
 app.use('/api/auth', require('./api/auth'));

 app.get('/', (req, res) => res.send('Server Running !'));

 
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});