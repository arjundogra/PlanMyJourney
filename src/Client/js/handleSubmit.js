import { daysLeft } from "./daysLeft";
import fetch from "node-fetch";
import { UIupdate } from "./UIupdate";

let UIdata = {}

document.getElementById('btn').onclick = handleSubmit;

async function handleSubmit(event){
    document.getElementById('loader').className = 'loader';
    const destination = document.getElementById('destination').value;
    UIdata.dest = destination;
    console.log(destination);
    const tripDate = document.getElementById('tripDate').value;
    console.log(tripDate)

    const leftDays = await daysLeft(tripDate);
    UIdata.leftDays = leftDays;

    const response = await fetch('/api', {
        method:'POST' ,
        credentials: 'same-origin',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({"dest": destination })
    })
    const data = await response.json();
    console.log(data);
    let latLon = {
        lat:data.lat,
        lng: data.lng
    };
    Object.assign(UIdata,latLon);

    const getWeather = await fetch(`/getWeather?lat=${UIdata.lat}&lng=${UIdata.lng}`)
    const getWeatherData = await getWeather.json();
    console.log(getWeatherData);
    let weatherData = {
        temp: getWeatherData.data[0].temp,
        desc: getWeatherData.data[0].weather.description
    }
    console.log(weatherData);
    Object.assign(UIdata,weatherData);


    const getPic = await fetch(`/img?dest=${destination}`);
    const getPicData = await getPic.json();
    console.log(getPicData);
    UIdata.pic = getPicData.hits[0].largeImageURL;
    console.log(UIdata);

    document.getElementById('myModal').style.display = "block";

    UIupdate(UIdata);

}

export { handleSubmit }