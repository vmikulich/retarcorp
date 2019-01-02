import Factory from './factory';
import Utilits from './utilits';

document.head.innerHTML += `<link rel="stylesheet" type="text/css" media="screen" href="main.css" />`;

const WindowLib = {
  inputNumberWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.inputNumberHtml(title);
      document.body.appendChild(inputSpace);
      setTimeout(Utilits.moveToTopWindow, 100, inputSpace);
      inputSpace.querySelector('.quantity-arrow-minus').addEventListener('click', Utilits.quantityMinus);
      inputSpace.querySelector('.quantity-arrow-plus').addEventListener('click', Utilits.quantityPlus);
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
      });
      inputSpace.querySelector('#close').addEventListener('click', function(e) {
        const input = inputSpace.querySelector('input').value;
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
        func(input);
      });
    }
  },
  inputtextWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.inputTextHtml(title);
      document.body.appendChild(inputSpace);
      setTimeout(Utilits.moveToTopWindow, 100, inputSpace);
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        const input = inputSpace.querySelector('input').value;
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
        func(input);
      });
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
      });
    }
  },
  chooseOneWindow(title, choices, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.chooseOneHtml(title, choices);
      document.body.appendChild(inputSpace);
      setTimeout(Utilits.moveToTopWindow, 100, inputSpace);
      let yourChoice;
      inputSpace.querySelector('ul').addEventListener('click', function(e) {
        if (e.target.nodeName.toLowerCase() === 'input') {
          yourChoice = e.target.getAttribute('value');
        }
      });
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
        func(yourChoice);
      });
    }
  },
  confirmationWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.confirmationHtml(title);     
      document.body.appendChild(inputSpace);
      setTimeout(Utilits.moveToTopWindow, 100, inputSpace);
      let yourChoice = 0;
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
      });
      inputSpace.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
          this.value === 'true' ?  yourChoice = true : yourChoice = false;
          Utilits.moveTobottomWindow(inputSpace);
          setTimeout(Utilits.closeWindow, 400, inputSpace);
          func(yourChoice);
        });
      });
    }
  },
  chooseSeveralWindow(title, choices, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.chooseSeveralHtml(title, choices);
      document.body.appendChild(inputSpace);
      setTimeout(Utilits.moveToTopWindow, 100, inputSpace);
      const choiceArr = [];
      const inputs = inputSpace.getElementsByTagName('input');
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Array.from(inputs).forEach(choice => {
          if (choice.nodeName.toLowerCase() === 'input') {
            choice.checked && choiceArr.indexOf(choice.getAttribute('value')) === -1 ? choiceArr.push(choice.getAttribute('value')) : 0;
          }
        });
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
        func(choiceArr);
      });
    } 
  },
  errorWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.classList.add('errorSpace');
      inputSpace.querySelector('.constainer').innerHTML += Factory.errorHtml(title);
      document.body.appendChild(inputSpace);
      setTimeout(Utilits.moveToTopWindow, 100, inputSpace);
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
        func();
      });
    }
  },
  informationWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.informationHtml(title);
      document.body.appendChild(inputSpace);
      setTimeout(Utilits.moveToTopWindow, 100, inputSpace);
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Utilits.moveTobottomWindow(inputSpace);
        setTimeout(Utilits.closeWindow, 400, inputSpace);
        func();
      });
    }
  }
}

const f = data => {
  console.log(`Its your choice - ${data}`);
}

const button = document.getElementById('btn');

const arr = ['Biba', 'Boba', 'Gogi'];

button.addEventListener('click', function(e){
  WindowLib.confirmationWindow('Please enter a title', f);
})

const button1 = document.getElementById('btn1');

button1.addEventListener('click', function(e){
  WindowLib.chooseSeveralWindow('Please enter a title', arr, f);
})

const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');

button2.addEventListener('click', function(e){
  WindowLib.informationWindow('Please enter a title', f);
})
button3.addEventListener('click', function(e){
  WindowLib.errorWindow('Please enter a title', f);
})
button4.addEventListener('click', function(e){
  WindowLib.chooseOneWindow('Please enter a title', arr, f);
})
button5.addEventListener('click', function(e){
  WindowLib.inputtextWindow('Please enter a title', f);
})
button6.addEventListener('click', function(e){
  WindowLib.inputNumberWindow('Please enter a title', f);
})