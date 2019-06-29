'use strict';

const express = require('express');
const app = express();
const request = require ('request');
const apikey = "cf2cdf06fc274c11831155551192706";

app.get('/',function (req, res) {
  res.send('200');
});

app.get('/weather', function(req, res){
  const weatherURL = 'http://api.apixu.com/v1/current.json?key=${apikey}&q=${city}';
  request(weatherURL, function(error, response, body){
    let weather_json = JSON.parse(body);
    const weather = {
      forecast : weather_json.response[0].periods[0].weather,
      temp: weather_json.response[0].periods[0].feelslikeF,
      icon : weather_json.response[0].periods[0].icon
    };
    res.send ('body');
  });
});

//request('http://api.apixu.com/v1/current.json?key=cf2cdf06fc274c11831155551192706&q=Almaty',function(error, response, body) {
  //console.log(body);

  //app.listen(3000);
  //console.log('Server starts!');
//});











