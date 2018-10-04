let time = new Date();
let endTime = 24*60;
alert(`Remaining time ${endTime - (time.getHours()*60 + time.getMinutes())}`);