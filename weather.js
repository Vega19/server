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
  const weatherURL = 'http://api.apixu.com/v1/current.json?key=${apikey}&q=${city}';

  request(weatherURL, function (error, response, body) {
    if (error) {
      return res.status(500).send('Error');
    }
    if (response == 200) {
      return res.status(200);
    }
    res.status(200).send(body);
  });
});

  app.listen(3000, function(error, response, body) {
    console.log('Server starts!');
  });











