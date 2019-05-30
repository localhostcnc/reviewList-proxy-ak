/* eslint-disable func-names */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3060;

// enabling CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
