setInterval(showtime,1000);  
    
function  showtime() {
    let time = new Date()
    let hours = time.getHours();
    let  minutes = time.getMinutes();
    let  seconds = time.getSeconds();
    am_pm = "AM";
    if(hours >12){
        hours -= 12;
            am_pm = "PM";}
            if(hours == 0){
            hours = 12;
            am_pm = " AM";}
    
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
  
            let currentTime = hours + ":" 
                + minutes + ":" + seconds + am_pm;
  
            document.getElementById("clock")
                .innerHTML = currentTime;
}
showtime();