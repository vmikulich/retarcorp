(function () {
  function loadData() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', `http://localhost:8030/data?`, true);
      xhr.onload = function () {
          renderItems(JSON.parse(this.responseText));
          document.body.addEventListener('input', onPriceChanged);
      }
      xhr.send(null);
  }

  function onPriceChanged(e) {
      if (e.target.classList.contains('find')) {
          const minPrice = document.getElementById('min-price');
          const maxPrice = document.getElementById('max-price');
          const category = document.getElementById('category');

          const xhr = new XMLHttpRequest();
          xhr.open('GET', `http://localhost:8030/data?min=${minPrice.value}&max=${maxPrice.value}&category=${category.value}`, true);
          xhr.onload = function () {
              renderItems(JSON.parse(this.responseText));
          }
          xhr.send(null);
      }
  }

  function renderItems(items) {
      document.querySelector('.items-container').innerHTML = '';
      items.forEach(item => {
          let itemHTML = document.createElement('div');
          itemHTML.classList.add('item');
          itemHTML.innerHTML = `
              <img src="${item.img}" />
              <h2>${item.title}</h2>
              <p><b>Цена:</b> ${item.price}</p>
              <p><b>Категория:</b> ${item.category}</p>`

          document.querySelector('.items-container').appendChild(itemHTML);
      })
  }

  loadData()
})();