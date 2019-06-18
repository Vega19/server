'use strict';

const express = require('express');
const app = express();
app.get('/',function (req, res) {
  res.json('200');
  
});

app.listen(3000);
console.log('Server starts!');
