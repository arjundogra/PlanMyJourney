async function geoLocation(dest){
    const res = await fetch(`http://api.geonames.org/searchJSON?q=${dest}&maxRows=1&username=arjundogra`)
    const json = await res.json();
    console.log(json);
    return json;
}

export{
    geoLocation
}