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


export default Factory;