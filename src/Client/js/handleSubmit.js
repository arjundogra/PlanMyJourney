import { geoLocation } from "./geoLocation";
import { daysLeft } from "./daysLeft";

async function handleSubmit(event){
    const destination = document.getElementById('destination').value;
    console.log(destination);
    const tripDate = document.getElementById('tripDate').value;
    console.log(tripDate)

    const geoLoc = await geoLocation(destination);
    console.log(geoLoc)
    const leftDays = await daysLeft(tripDate);
    console.log(leftDays)

    const response = await fetch('/api', {
        method:'POST' ,
        credentials: 'same-origin',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({destination})
    })
    const json = await response.json();
    console.log(json);

}

export { handleSubmit }