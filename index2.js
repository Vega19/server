const request = require ('request');
const apikey = "cf2cdf06fc274c11831155551192706";
const weatherURL = 'http://api.apixu.com/v1/current.json?key=${apikey}&q=${city}';
request(weatherURL, function(error, response, body){
  res.send("index", {weather: weather});
});
