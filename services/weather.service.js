'use strict';

const request = require ('request');
const apikey = "cf2cdf06fc274c11831155551192706";

function getWeatherByCity(city) {
  const weatherURL = `http://api.apixu.com/v1/current.json?key=${apikey}&q=${city}`;
  request(weatherURL, function (error, response, body) {
    if (error) {
      return res.status(500).send(error);
    }
    if (response.statusCode ===200) {
      return res.status(response.statusCode).send(response.statusMessage);
    }
    res.status(response.statusCode).send(body);
  });
}

module.exports = {
  getWeatherByCity
};