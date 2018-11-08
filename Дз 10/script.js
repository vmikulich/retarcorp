let numberOfRoads = Number(prompt('Enter number of roads'));

const numb = numberOfRoads;
const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const cars = document.getElementsByClassName('car');
const tds = document.getElementsByTagName('td');

const addCar = cell => {
  const car = document.createElement('img');
    car.src = "img/car1.png";
    car.id = 'car';
    car.className = 'car';
    cell.appendChild(car);
}

const addMan = cell => {
  const man = document.createElement('img');
  man.src = "img/person.png";
  man.id = 'man';
  man.className = 'man';
  cell.appendChild(man);
}

for (let y = 0; y < numberOfRoads; y++) {
  let newRow = table.insertRow(y);
  let newCell = newRow.insertCell(0);
  if (y === 0) newRow.id = 'end';
  if (y === numberOfRoads - 1) {
    newRow.id = 'start';
    addMan(newCell);
  }
  if(y !== 0 && y !== numberOfRoads - 1) {
    addCar(newCell);
  }
}

const speed = () => Math.round(Math.random() * 20) / 2;
const marginValue = () => Math.round(Math.random() * 300);

const carMoven = [].forEach.call(cars, car => {
  let margin = marginValue();
  setInterval(function() {
    margin += 1;
    car.style.marginLeft = `${margin}px`;
    if (margin === 437) margin = 0;
  } , speed());
});

const isCrash = () => {
  if (numberOfRoads !== numb) {
    const person = document.getElementById('man');
    const manLoc = person.getBoundingClientRect();
    const brother = person.previousElementSibling;
    const carLoc = brother.getBoundingClientRect();
    if (manLoc.x >= (carLoc.x - 20) && manLoc.x <= (carLoc.x + 50)) {
      return true;
    }
  }
 
}

const onCrash = () => {
  const interval = setInterval(function() {
    if(isCrash()) {
      clearInterval(interval);
      let message = confirm('You lose. Do you want to play again?');
      message ? location.reload() : window.close();
    }
  }, 4);
}
onCrash();

const person = document.getElementById('man');

const upMoving = function(e) {
  if (e.keyCode === 1094 || e.keyCode === 119) {
    tds[numberOfRoads - 1].lastElementChild.remove();
    tds[--numberOfRoads - 1].appendChild(person);
    console.log(numberOfRoads);
    if (numberOfRoads === 1) {
      let message = confirm('You win. Do you want to play again?');
      message ? location.reload() : window.close();
    }
  }
}

const downMoving = function(e) {
  if ((e.keyCode === 1099 || e.keyCode === 115) && numberOfRoads < numb) {
    tds[numberOfRoads - 1].lastElementChild.remove();
    tds[++numberOfRoads - 1].appendChild(person);
    console.log(numberOfRoads);
  }
}

window.addEventListener('keypress', upMoving);
window.addEventListener('keypress', downMoving);


