/* eslint-disable func-names */
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const CORS =require('cors');

const port = process.env.PORT || 3060;

// enabling CORS
app.use(CORS());

app.use('/ak', express.static('modules/reviewList-ak/client/dist/'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
