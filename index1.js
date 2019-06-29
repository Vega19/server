'use strict';

const express = require('express');
const app = express();
const request = require ('request');
app.get('/',function (req, res) {
  res.send('200');
  res.render('index',{weather:null,error:null});
});
app.get(‘/weather’, function(req, res) =>