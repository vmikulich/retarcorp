const Utilits = {
  status: 0,
  closeWindow(inputSpace) {
        document.body.removeChild(inputSpace);
        Utilits.status = 0;
  },
  createWindow() {
    const inputSpace = document.createElement('div');
      inputSpace.classList.add('inputSpace');
      inputSpace.innerHTML = `<div></div>`;
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

const WindowLib = {
  
  inputNumberWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.firstElementChild.innerHTML += `<h3 class="title">${title}</h3>
                                                 <div class="input-number-container">
                                                    <button class="quantity-arrow-minus">-</button>
                                                    <input class="quantity-num" type="number" value="0">
                                                    <button class="quantity-arrow-plus">+</button>
                                                 </div>  
                                                 <button>Confirm</button>`;
      document.body.appendChild(inputSpace);
      inputSpace.firstElementChild.children[2].firstElementChild.addEventListener('click', Utilits.quantityMinus);
      inputSpace.firstElementChild.children[2].lastElementChild.addEventListener('click', Utilits.quantityPlus);
      inputSpace.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.firstElementChild.lastElementChild.addEventListener('click', function(e) {
        const input = inputSpace.querySelector('input').value;
        Utilits.closeWindow(inputSpace);
        func(input);
      });
    }
  },
  inputtextWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.firstElementChild.innerHTML += `<h3 class="title">${title}</h3>
                                                  <input type="text">
                                                  <button>Confirm</button>`;
      document.body.appendChild(inputSpace);
      inputSpace.firstElementChild.lastElementChild.addEventListener('click', function(e) {
        const input = inputSpace.firstElementChild.querySelector('input').value;
        Utilits.closeWindow(inputSpace);
        func(input);
      });
      inputSpace.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      // inputSpace.firstElementChild.lastElementChild.addEventListener('keypress', function(e) {
      //   console.log(e.keyCode);
      //   if (e.keyCode === 28) {
      //     const input = inputSpace.firstElementChild.querySelector('input').value;
      //     document.body.removeChild(inputSpace);
      //     Utilits.status = 0;
      //     func(input);
      //   }
        
      // });
    }
  },
  chooseOneWindow(title, choices, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.firstElementChild.innerHTML += `<h3 class="title">${title}</h3>
                                                 <ul></ul>`;
      inputSpace.firstElementChild.lastElementChild.innerHTML += choices.map(choice => `<li>
                                                                          <input type="radio" class="option-input radio" name="choise" value="${choice}">${choice}
                                                                         </li>`).join('');
      inputSpace.firstElementChild.innerHTML += `<button>Confirm</button>`;
      document.body.appendChild(inputSpace);
      let yourChoice;
      inputSpace.querySelector('ul').addEventListener('click', function(e) {
        if (e.target.nodeName.toLowerCase() === 'input') {
          yourChoice = e.target.getAttribute('value');
        }
      });
      inputSpace.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.firstElementChild.lastElementChild.addEventListener('click', function(e) {
        Utilits.closeWindow(inputSpace);
        func(yourChoice);
      });
    }
  },
  confirmationWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.firstElementChild.innerHTML += `<h3 class="title">${title}</h3>
                                                <button value="true" class="confirm">Continue</button>
                                                <button value="false" class="cancel">Cancel</button>`;     
      document.body.appendChild(inputSpace);
      let yourChoice = 0;
      inputSpace.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.firstElementChild.querySelectorAll('button').forEach(el => {
        el.addEventListener('click', function(e) {
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
      inputSpace.firstElementChild.innerHTML += `<h3 class="title">${title}</h3>
                                                 <ul></ul>`;
      inputSpace.firstElementChild.lastElementChild.innerHTML += choices.map(choice => `<li>
                                                                            <input type="checkbox" class="option-input checkbox" name="choise" value="${choice}">${choice}
                                                                         </li>`).join('');
      inputSpace.firstElementChild.innerHTML += `<button>Confirm</button>`;
      document.body.appendChild(inputSpace);
      const choiceArr = [];
      inputSpace.querySelector('ul').addEventListener('click', function(e) {
        if (e.target.nodeName.toLowerCase() === 'input') {
          e.target.checked && choiceArr.indexOf(e.target.getAttribute('value')) === -1 ? choiceArr.push(e.target.getAttribute('value')) : 0;
        }
      });
      inputSpace.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.firstElementChild.lastElementChild.addEventListener('click', function(e) {
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
      inputSpace.firstElementChild.innerHTML += `<img src="img/error.png">
                                                 <h3 class="title">${title}</h3>
                                                 <button class="ok-button">Ok</button>`;
      document.body.appendChild(inputSpace);
      inputSpace.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.firstElementChild.lastElementChild.addEventListener('click', function(e) {
        Utilits.closeWindow(inputSpace);
        func();
      });
    }
  },
  informationWindow(title, func) {
    if (Utilits.status === 0) {
      Utilits.status = 1;
      const inputSpace = Utilits.createWindow();
      inputSpace.firstElementChild.innerHTML += `<h3 class="title">${title}</h3>
                                                 <button class="ok-button">Ok</button>`;
      document.body.appendChild(inputSpace);
      inputSpace.firstElementChild.firstElementChild.firstElementChild.addEventListener('click', function() {
        Utilits.closeWindow(inputSpace);
      });
      inputSpace.firstElementChild.lastElementChild.addEventListener('click', function(e) {
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

const arr = ['Biba', 'Boba', 'Hueba'];

button.addEventListener('click', function(e){
  WindowLib.confirmationWindow('Error you stupid shit dog cat parrot', f);
})

const button1 = document.getElementById('btn1');

button1.addEventListener('click', function(e){
  WindowLib.chooseSeveralWindow('Error you stupid shit girl boy cat dog', arr, f);
})

const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');

button2.addEventListener('click', function(e){
  WindowLib.informationWindow('Error you stupid shit girl boy cat dog', f);
})
button3.addEventListener('click', function(e){
  WindowLib.errorWindow('Error you stupid shit girl boy cat dog', f);
})
button4.addEventListener('click', function(e){
  WindowLib.chooseOneWindow('Error you stupid shit girl boy cat dog', arr, f);
})
button5.addEventListener('click', function(e){
  WindowLib.inputtextWindow('Error you stupid shit girl boy cat dog', f);
})
button6.addEventListener('click', function(e){
  WindowLib.inputNumberWindow('Error you stupid shit girl boy cat dog', f);
})