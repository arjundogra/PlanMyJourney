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


app.listen(8084, function () {
    console.log('Example app listening on port 8084');
})

app.post('/api', async (req,res) => {
    const val = req.body;
    const url = `http://api.geonames.org/searchJSON?q=${req.body.dest}&maxRows=1&username=arjundogra`
    const fetchLatLon = await fetch(url);
    const json = await fetchLatLon.json();
    console.log(json);
    res.send(json.geonames[0]);
})

app.get('/getWeather', async (req,res)=>{
    const fetchWeather = await fetch(`https://api.weatherbit.io/v2.0/current?&lat=${req.query.lat}&lon=${req.query.lng}&key=59e13e1de5404d39b88bec27af4d43d5`)
    const fetchWeatherData = await fetchWeather.json();
    console.log(fetchWeatherData);
    res.json(fetchWeatherData);
})

app.get('/img', async(req,res)=>{
    console.log(req.query.dest)
    const url = `https://pixabay.com/api/?key=17463783-ef5ca5ab58ccdd05dc43d0d47&q=${req.query.dest}&image_type=photo`
    const fetchPic = await fetch(url);
    const fetchPicData = await fetchPic.json();
    console.log(fetchPicData);
    res.json(fetchPicData);
})
