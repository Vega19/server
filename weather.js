'use strict';

const express = require('express');
const app = express();
const request = require ('request');
const apikey = "cf2cdf06fc274c11831155551192706";

app.get('/',function (req, res) {
  res.status(200).send('Ok');
});

app.get('/weather', function(req, res) {
  const city = req.query.city;
  const weatherURL = `http://api.apixu.com/v1/current.json?key=${apikey}&q=${city}`;

  request(weatherURL, function (error, response, body) {
    if (error) {
      return res.status(500).send(error);
    }
    if (response.statusCode) {
      return res.status(response.statusCode).send(body);
    }
    res.status(response.statusCode).send(body);
  });
});

  app.listen(3001, function() {
    console.log('Server starts!');
  });











