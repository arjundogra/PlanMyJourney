function daysLeft(tripDate){
    const date1 = new Date();
    console.log(date1);
    console.log(date1.getTime());
    const date2 = new Date(tripDate);
    const difference_in_time = (date2.getTime() - date1.getTime())
    console.log(difference_in_time);
    const difference_in_days = difference_in_time / (1000*86400);
    return Math.floor(difference_in_days);  
}

export{
    daysLeft
}