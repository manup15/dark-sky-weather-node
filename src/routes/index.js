const express = require('express')
const fetch = require("node-fetch");
const router = express.Router()

const lat = 58.7984;
const lng = 17.8081;
const params = 'windSpeed';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': '372b4386-7923-11ea-a222-0242ac130002-372b443a-7923-11ea-a222-0242ac130002'
  }
}).then((response) => response.json()).then((jsonData) => {
  console.log(jsonData);
  
});
router.get('/',(req,res) => {
    res.render('index')
})

router.get('/latitude/:latitude/longitude/:longitude', (req,res) => {
    console.log(req.params.latitude,req.params.longitude);
    res.end('recibido')
})

module.exports = router






