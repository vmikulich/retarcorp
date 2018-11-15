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