let dots = true;
function clock(){
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  document.getElementById('hours').innerHTML = hours > 9 ? hours : `0${hours}`;
  document.getElementById('minutes').innerHTML = minutes > 9 ? minutes : `0${minutes}`;
  document.getElementById('seconds').innerHTML = seconds > 9 ? seconds : `0${seconds}`;
  const dots1 = document.getElementById('dots1');
  const dots2 = document.getElementById('dots2');
  if(dots) {
    dots1.style.opacity = '1';
    dots2.style.opacity = '1';
    dots = false;
  }
  else {
    dots1.style.opacity = '0';
    dots2.style.opacity = '0';
    dots = true;
  }
}

function startClock(){
  clock();
  setInterval(clock,1000);
}
