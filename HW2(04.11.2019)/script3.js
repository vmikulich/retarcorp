let currentTime = new Date();
let endTime = 24*60;
alert(`Remaining time ${endTime - (currentTime.getHours()*60 + currentTime.getMinutes())}`);