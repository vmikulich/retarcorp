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
  moveToTopWindow(element) {
    element.style.top = '0';
  },
  moveTobottomWindow(element) {
    element.style.top = '100%';
  }
}

export default Utilits;