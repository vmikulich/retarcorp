const showMenu = () => {
  const menu = document.getElementById('mytopnav');
  const button = document.getElementById('btn');
  let menuStatus = 0;
  console.log(menu);
  console.log(button);
  button.addEventListener('click', function(e) {
    // if (menu.style.display == 'none') {
    //   menu.style.display = 'block';
    // }
    // else {
    //   menu.style.display = 'none';
    // }
    menu.style.opacity == 0 ? menu.style.opacity = 1 : menu.style.opacity = 0;
  });
};
showMenu();