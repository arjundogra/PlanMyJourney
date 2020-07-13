import { daysLeft } from "./daysLeft";
import fetch from "node-fetch";

let UIdata = {}

async function handleSubmit(event){
    const destination = document.getElementById('destination').value;
    console.log(destination);
    const tripDate = document.getElementById('tripDate').value;
    console.log(tripDate)

    const leftDays = await daysLeft(tripDate);
    console.log(leftDays)

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
    let picUrl = {
        pic1: getPicData.hits[0].largeImageURL,
        pic2: getPicData.hits[1].largeImageURL,
        pic3: getPicData.hits[2].largeImageURL,
        pic4: getPicData.hits[3].largeImageURL
    }
    Object.assign(UIdata, picUrl);
    console.log(UIdata);

    document.getElementById('1').src = UIdata.pic1;
    document.getElementById('2').src = UIdata.pic2;
    document.getElementById('3').src = UIdata.pic3;
    document.getElementById('4').src = UIdata.pic4;

}

export { handleSubmit }