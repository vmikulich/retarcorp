function getEndTime(){
    let endTime = new Date();
    endTime.setHours(23, 59, 59);
    return endTime;
}

function timer(){
    let endTime = getEndTime();
    let currentTime = new Date();
    let restTime = endTime - currentTime;
    let hours = Math.floor(restTime/1000/60/60);
    let minutes = Math.floor((restTime-hours*60*60*1000)/1000/60);
    let seconds = Math.floor(((restTime-hours*60*60*1000)-minutes*60*1000)/1000);
    document.getElementById('hours').innerHTML = hours > 9 ? hours : `0${hours}`;
    document.getElementById('minutes').innerHTML = minutes > 9 ? minutes : `0${minutes}`;
    document.getElementById('seconds').innerHTML = seconds > 9 ? seconds : `0${seconds}`;
}

function startTimer(){
    timer();
    setInterval(timer,1000);
}

