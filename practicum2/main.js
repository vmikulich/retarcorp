document.head.innerHTML += `<link rel="stylesheet" type="text/css" media="screen" href="main.css" />`;

const Utilits = {
  status: 0,
  closeWindow(inputSpace) {
        document.body.removeChild(inputSpace);
        Utilits.status = 0;
  },
  createWindow() {
    const inputSpace = document.createElement('div');
      inputSpace.classList.add('inputSpace');
      inputSpace.innerHTML = `<div class="constainer"></div>`;
      inputSpace.firstElementChild.innerHTML = `<div class="exit-container"><div class="exit">&#10006;</div></div>`;
      return inputSpace;
  },
  quantityMinus() {
    this.nextElementSibling.value--;
  },
  quantityPlus() {
    this.previousElementSibling.value++;
  },
}


const Factory = {
  inputNumberHtml(title) {
    const html =  `<h3 class="title">${title}</h3>
                  <div class="input-number-container">
                    <button class="quantity-arrow-minus">-</button>
                    <input class="quantity-num" type="number" value="0">
                    <button class="quantity-arrow-plus">+</button>
                  </div>  
                  <button id="close">Confirm</button>`;
    return html;              
  },
  inputTextHtml(title) {
    const html = `<h3 class="title">${title}</h3>
                  <input type="text">
                  <button>Confirm</button>`;
    return html;              
  },
  confirmationHtml(title) {
    const html = `<h3 class="title">${title}</h3>
                  <button value="true" class="confirm">Continue</button>
                  <button value="false" class="cancel">Cancel</button>`;
    return html; 
  },
  errorHtml(title) {
    const html = `<img src="img/error.png">
                  <h3 class="title">${title}</h3>
                  <button class="ok-button">Ok</button>`;
    return html; 
  },
  informationHtml(title) {
    const html = `<h3 class="title">${title}</h3>
                  <button class="ok-button">Ok</button>`;
    return html; 
  },
  chooseOneHtml(title, choices) {
    
    const spis = choices.reduce((prev, cur) => 
                                    prev + `<li>
                                              <input type="radio" class="option-input radio" name="choise" value="${cur}">${cur}
                                            </li>`, '');
    const head = `<h3 class="title">${title}</h3>
                 <ul>${spis}</ul>`;                                        
    const button = `<button>Confirm</button>`;
    const html = `${head}${button}`;       
    return html;
  },
  chooseSeveralHtml(title, choices) {
    
    const spis = choices.reduce((prev, cur) => 
                                    prev + `<li>
                                              <input type="checkbox" class="option-input checkbox" name="choise" value="${cur}">${cur}
                                            </li>`, '');
    const head = `<h3 class="title">${title}</h3>
                 <ul>${spis}</ul>`;                                        
    const button = `<button>Confirm</button>`;
    const html = `${head}${button}`;       
    return html;
  },
}



const WindowLib = {
  inputNumberWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.inputNumberHtml(title);
      document.body.appendChild(inputSpace);
      inputSpace.querySelector('.quantity-arrow-minus').addEventListener('click', Utilits.quantityMinus);
      inputSpace.querySelector('.quantity-arrow-plus').addEventListener('click', Utilits.quantityPlus);
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.querySelector('#close').addEventListener('click', function(e) {
        const input = inputSpace.querySelector('input').value;
        Utilits.closeWindow(inputSpace);
        func(input);
      });
      // inputSpace.addEventListener('keypress', function(e) {
      //   console.log(e.keyCode);
      //   if (e.keyCode === 13) {
      //     const input = inputSpace.querySelector('input').value;
      //     Utilits.closeWindow(inputSpace);
      //     func(input);
      //   }
      // });
    }
  },
  inputtextWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.inputTextHtml(title);
      document.body.appendChild(inputSpace);
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        const input = inputSpace.querySelector('input').value;
        Utilits.closeWindow(inputSpace);
        func(input);
      });
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
    }
  },
  chooseOneWindow(title, choices, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.querySelector('.constainer').innerHTML += Factory.chooseOneHtml(title, choices);
      document.body.appendChild(inputSpace);
      let yourChoice;
      inputSpace.querySelector('ul').addEventListener('click', function(e) {
        if (e.target.nodeName.toLowerCase() === 'input') {
          yourChoice = e.target.getAttribute('value');
        }
      });
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Utilits.closeWindow(inputSpace);
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
      let yourChoice = 0;
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
          this.value === 'true' ?  yourChoice = true : yourChoice = false;
          Utilits.closeWindow(inputSpace);
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
      const choiceArr = [];
      const inputs = inputSpace.getElementsByTagName('input');
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Array.from(inputs).forEach(choice => {
          if (choice.nodeName.toLowerCase() === 'input') {
            choice.checked && choiceArr.indexOf(choice.getAttribute('value')) === -1 ? choiceArr.push(choice.getAttribute('value')) : 0;
          }
        });
        Utilits.closeWindow(inputSpace);
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
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Utilits.closeWindow(inputSpace);
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
      inputSpace.querySelector('.exit').addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.querySelector('button').addEventListener('click', function(e) {
        Utilits.closeWindow(inputSpace);
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