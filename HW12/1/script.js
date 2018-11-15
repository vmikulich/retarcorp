const Routes = {
	"#sieveOfEratosthenes":{
    path:"1-st/sieveOfErat.html",
    handler: function() {
      const N = Number(prompt('Enter N'));
      const container = document.getElementById('table-container')
      const table = document.createElement('table');
      const tBody = document.createElement('tbody');
      table.appendChild(tBody);
      table.id = "id_table";
      let elem = 2;
      for (let y = 0; y < N / 10; y++) {
        let newRow = table.insertRow(y);
        for (let x = 0; x < 10; x++) {
          if(elem > N) break;
          let newCell = newRow.insertCell(x);
          if(y === 0 && x === 0) {
            newCell.innerText = " ";
          }
          else {
            newCell.innerText = elem++;
          }
        }
      }
      container.appendChild(table);
      let p = 2;
      const tds = document.getElementsByTagName('td');
      let td = tds[1];
      console.log(tds);
        const interval = setTimeout(func = () => {
          let i = 0;
          td.className = "current";
          const redClassInterval = setInterval(() => {
            if(Number(tds[i].innerText) % p === 0 && Number(tds[i].innerText) !== p) {
              tds[i].className = "prime";
            }
            i += 1;
            if(i > N - 1) clearInterval(redClassInterval);
          }, 10);
          const primeTimeout = setTimeout(() => {
            const prime = [].find.call(tds, td => (td.className !== 'prime') && Number(td.innerText) !== p && td.innerText > p);
            td.className = "";
            td = prime;
            td.className = 'current';
            p = Number(prime.innerText);
            console.log(p);
            if(p * p <= N) setTimeout(func, 1000);
          }, N * 15);
        }, 1000);
		}
  },
  "#colors":{
    path: "2-nd/colors.html",
    handler: function() {
      const n = prompt('Enter n');
      const tbody = document.querySelector('tbody');
      const createTable = (data, n) => {
        for (let i = 0; i < n; i++) {
          const tr = document.createElement('tr');
          tbody.appendChild(tr);
          for (let j = 0; j < n; j++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = data;
            td.addEventListener('mouseover', function() {
              this.classList.add('red');
            });
            td.addEventListener('mouseout', function() {
              const timer = setTimeout(function() {
                td.classList.remove('red');
              }, 2000);
            })
          }
        }
      }
      createTable("", n);
    }
  },
  "#clock":{
    path: "3-rd/clock.html",
    handler: function() {
      let dots = true;
      function clock(){
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        document.getElementById('hours').innerHTML = hours > 9 ? hours : `0${hours}`;
        document.getElementById('minutes').innerHTML = minutes > 9 ? minutes : `0${minutes}`;
        document.getElementById('seconds').innerHTML = seconds > 9 ? seconds : `0${seconds}`;
        const dots1 = document.getElementById('dots1');
        const dots2 = document.getElementById('dots2');
        if(dots) {
          dots1.style.opacity = '1';
          dots2.style.opacity = '1';
          dots = false;
        }
        else {
          dots1.style.opacity = '0';
          dots2.style.opacity = '0';
          dots = true;
        }
      }

      function startClock(){
        clock();
        setInterval(clock,1000);
      }
      startClock();
    }
  },
  "#multTable":{
    path: "4-th/multTable.html",
    handler: function() {
      const container = document.getElementById('table-container');
      const N = Number(prompt('Enter N'));
      const table = document.createElement('table');
      const tBody = document.createElement('tbody');
      table.appendChild(tBody);
      table.id = "id_table";
      for (let y = 0; y <= N; y++) {
        let newRow = table.insertRow(y);
        for (let x = 0; x <= N; x++) {
          let newCell = newRow.insertCell(x);
          if(y === 0 && x === 0) {
            newCell.innerText = " ";
            newCell.className = "color2";
          }
          if(y === 0 && x > 0) {
            newCell.innerText = x;
            newCell.className = "color2";
          }
          if(y > 0 && x === 0) {
            newCell.innerText = y;
            newCell.className = "color2";
          }
          if(y > 0 && x > 0) {
            newCell.innerText = y * x;
          }
          if (y === x && y !== 0) {
            newCell.className = "color";
          }
        }
      }
      container.appendChild(table);
    }
  },
  "#creater":{
    path: "5-th/creater.html",
  }
}



function refreshContainer(){
	const hash = location.hash; //открытый в данный момент 
	if(hash in Routes){
		const path = Routes[hash].path;
		const xhr = new XMLHttpRequest();
		xhr.open('GET', path, true);
		xhr.onload = function(){
			onPageLoaded(this.responseText, hash);
		}
		xhr.send(null)
	}
}

function onPageLoaded(text,hash){
	const div = document.getElementById('container');
	div.innerHTML = text;
	if(typeof Routes[hash].handler === "function"){  //проверяем есть ли в пути такие элементы
		Routes[hash].handler();
	}
}

window.onhashchange = refreshContainer; //вызывается когда меняется hash (после #)
refreshContainer();  //вызывется принудительно первый раз и загружает ранее открытый hash