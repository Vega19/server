'use strict';

const weatherService = require ('../services/weather.service');

function getWeatherByCity(req,res) {
  const city = req.query.city;

  return weatherService.getWeatherByCity(city);
}

module.exports = {
  getWeatherByCity
};