'use strict';
const request = require('request');
request('http://api.apixu.com/v1/current.json?key=cf2cdf06fc274c11831155551192706&q=Almaty',function(error, response, body) {
  console.log(body);
});