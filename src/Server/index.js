const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
const { json } = require('body-parser');

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


//server test
app.get('/test', function(req, res){
    res.json({
      status: 200
    })
  })
  
const port = 8084;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
})

app.post('/api', async (req,res) => {
    const val = req.body;
    const url = `http://api.geonames.org/searchJSON?q=${req.body.dest}&maxRows=1&username=${process.env.geoNameUN}`
    const fetchLatLon = await fetch(url);
    const json = await fetchLatLon.json();
    console.log(json);
    res.send(json.geonames[0]);
})

app.get('/getWeather', async (req,res)=>{
    const fetchWeather = await fetch(`https://api.weatherbit.io/v2.0/current?&lat=${req.query.lat}&lon=${req.query.lng}&key=${process.env.getWeatherKey}`)
    const fetchWeatherData = await fetchWeather.json();
    console.log(fetchWeatherData);
    res.json(fetchWeatherData);
})

app.get('/img', async(req,res)=>{
    console.log(req.query.dest)
    const url = `https://pixabay.com/api/?key=${process.env.pixabayKey}&q=${req.query.dest}&image_type=photo`
    const fetchPic = await fetch(url);
    const fetchPicData = await fetchPic.json();
    console.log(fetchPicData);
    res.json(fetchPicData);
})

const checkIfPort = num => {
    return num === port;
  };
  
module.exports = { checkIfPort };