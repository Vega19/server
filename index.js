'use strict';

const express = require('express');
const app = express();
const request = require ('request');
const apikey = "cf2cdf06fc274c11831155551192706";

const healthController = require('./controllers/health.controller');
const weatherController = require('./controllers/weather.controller');

app.get('/health',healthController.checkHealth);

app.get('/weather',weatherController.getWeatherByCity);

  app.listen(3001, function() {
    console.log('Server starts!');
  });











