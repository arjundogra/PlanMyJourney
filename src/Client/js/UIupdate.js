function UIupdate(data){
    document.getElementById('loader').className = "";
    document.getElementById('close').onclick = function(){
        document.getElementById('myModal').style.display = "none";
    }
    document.getElementById('mainHeading').innerHTML = `Your Trip To ${data.dest}`
    document.getElementById('temp').innerHTML = `  ${data.temp}`;
    document.getElementById('desc').innerHTML = `  ${data.desc}`;
    document.getElementById('daysLeft').innerHTML = `  ${data.leftDays}`;
    document.getElementById('destImg').src = data.pic;
    console.log(data)
}

export{
    UIupdate
}