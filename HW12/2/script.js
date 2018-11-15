function loadCategories() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'categories.json', true);
  xhr.onload = function() {
    onCategoriesLoaded(JSON.parse(this.responseText));
  }
  xhr.send(null);
}



function onCategoriesLoaded(categories) {
  document.querySelector('nav').innerHTML = `<ul></ul>`;
  document.querySelector('nav').querySelector('ul').innerHTML = categories.map(cat => `<li ><a href="${cat.path}"> ${cat.title} </a></li>`).join('');
  document.querySelector('nav').addEventListener('click', function(e) {
    e.stopPropagation();
    if (e.target.nodeName.toLowerCase() === "a") {
      console.log(e.target.parentNode);
      loadSubCategories(e.target.getAttribute('href'), e.target.parentNode);
      e.preventDefault();
    }
    // else {
    //   console.log(e.target.parentNode.lastElementChild);
    //   subStatus = 0;
    // }
  });
  
}

function loadSubCategories(subcat, item) {
  console.log(subcat);
  let xhr = new XMLHttpRequest();
  xhr.open('GET', subcat, true);
  xhr.onload = function() {
    onSubCategoriesLoaded(JSON.parse(this.responseText), item);
  }
  xhr.send(null);
}

function onSubCategoriesLoaded(categories, targetParent) {
  targetParent.appendChild(document.createElement('ul'));
  targetParent.querySelector('ul').classList.add('submenu');
  targetParent.querySelector('ul').innerHTML = categories.map(cat => `<li><a href="${cat.path}"> ${cat.title} </a></li>`).join('');
  targetParent.addEventListener('click', function(e) {
    if (e.target.nodeName.toLowerCase() === "a" && e.target.parentNode.parentNode.classList.contains('submenu')) {
      console.log(e.target.parentNode);
      targetParent.querySelector('ul').remove();
      loadArticles(e.target.getAttribute('href'));
      e.preventDefault();
      
     
    }
    // else {
    //   subStatus = 0;
    //   this.lastElementChild.style.display = 'none';
    // }
  });
}

function loadArticles(article) {
  console.log(article);
  let xhr = new XMLHttpRequest();
  xhr.open('GET', article, true);
  xhr.onload = function() {
    onArticlesLoaded(JSON.parse(this.responseText))
  }
  xhr.send(null);
}

function onArticlesLoaded(articles) {
  const section = document.getElementById('list');
  section.innerHTML = "";
  const div = document.createElement('div');
  div.classList.add('articles-list');
  section.appendChild(div);
  div.innerHTML = articles.map(art => `<div>
                                          <img src="${art.img}">
                                          <div class="article-title-item"> 
                                            <h3><a href="${art.path}" class="article"> ${art.title} </a></h3>
                                            <p>${art.shortContent}</p>
                                          </div>
                                        </div>`).join('');
  section.addEventListener('click', function(e) {
    if (e.target.nodeName.toLowerCase() === "a" && e.target.classList.contains('article')) {
      console.log(e.target.parentNode);
      e.stopPropagation();
      loadCategory(e.target.getAttribute('href'));
      e.preventDefault();
    }
  });
}

function loadCategory(path) {
  console.log(path);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.onload = function() {
    const data = this.responseText;
    const item = JSON.parse(data);
    buildContent(item);
  }
  xhr.send(null);
}


function buildContent(item) {
    const section = document.getElementById('list');
    section.innerHTML = "";
    section.innerHTML = `<div class="title-container"></div>`;
    section.firstElementChild.innerHTML += `<h2> ${item.title} </h2>`;
    if (typeof item.img === 'string') section.firstElementChild.innerHTML += `<img src="${item.img}">`;
    section.innerHTML += `<div class="text-container"<p> ${item.content}</p></div>
                          <div class="views-stars">
                            <div class="views"><img src="eye.png"><span>${Math.round(100000 * Math.random())}</span></div>
                            <div class="stars"></div>
                          </div>`;
    const stars = document.querySelector('.stars');
    getRandStars("star.png", stars);
    if (typeof item.video === 'string') section.innerHTML += `<video width="779" height="472" controls>
                                                                <source src="${item.video}" type="video/mp4">
                                                              Your browser does not support the video tag.
                                                              </video>`;
}
function getRandStars(img, parent) {
  const numb = Math.ceil((5 - 1) * Math.random() + 1);
  const arr = new Array(numb);
  arr.fill('');
  const arrImg = arr.map(el => el = `<img src="${img}"></img>`);
  parent.innerHTML += arrImg.join('');
}

loadCategories();

document.addEventListener('click', function() {
  const arr = document.querySelectorAll('nav > ul > li > ul');
  [].forEach.call(arr, el => el.remove());
});