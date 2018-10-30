const contextMenu = {
  past: 'Past',
  copy: 'Copy',
  cut: 'Cut',
  rename: 'Rename',
  reload: 'Reload',
  method: function() {
    const menu = document.querySelector(".context-menu");
    const rows = document.getElementsByClassName('context-menu__link');
    const createMenu = (...arg) => {
      for (let i = 0; i < rows.length; i++) {
        rows[i].innerHTML = arg[i];
      }
    }
    createMenu('Past', 'Copy', 'Cut', 'Rename', 'Reload');
    let menuState = 0;
    document.addEventListener('contextmenu', function(e) {
      console.log(e);
      let noContext = e.target.getAttribute('no-context');
      e.preventDefault()
      if (noContext !== 'true') {
        let positionX = e.pageX + "px";
        let positionY = e.pageY + "px";
        menu.style.left = positionX;
        menu.style.top = positionY;
        if (menuState !== 1) {
          menuState = 1;
          menu.classList.add('context-menu--active');
        }
        document.addEventListener('click', function() {
          menuState = 0;
          menu.classList.remove('context-menu--active');
        }); 
      }
    });  
  }
}
contextMenu.method();