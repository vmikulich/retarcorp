const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.txt', true);
xhr.onload = function() {
  const arrCsv = this.responseText.split('\n')
                                  .map(el => el.trim());

  const arr = arrCsv.map(el => el.split(', '))
                    .map(el => {
                      return {
                        nameRus: el[0],
                        nameEng: el[1],
                        language: el[2],
                        populatuon: el[3],
                        area: el[4],
                        capital: el[5],
                        timezone: el[6],
                        income: el[7]
                      }
                    });
  console.log(arr);

  arr.sort((a, b) => b.populatuon - a.populatuon);

  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  const keys = Object.keys(arr[0]);
  console.log(keys);

  for (let y = 0; y <= arrCsv.length;) {
    let newRow = table.insertRow(y);
    for (let x = 0; x < keys.length; x++) {
      let newCell = newRow.insertCell(x);
      newCell.className = "color1";
      if(y === 0 && x >= 0) {
        newCell.innerText = keys[x];
        newCell.className = "color2";
      }
      if (x === 0 && y !== 0) {
        console.log(y);
        newCell.innerHTML = arr[y - 1].nameRus;
      }
      if (x === 1 && y !== 0) {
        newCell.innerHTML = arr[y - 1].nameEng;
      }
      if (x === 2 && y !== 0) {
        newCell.innerHTML = arr[y - 1].language;
      }
      if (x === 3 && y !== 0) {
        newCell.innerHTML = arr[y - 1].populatuon;
      }
      if (x === 4 && y !== 0) {
        newCell.innerHTML = arr[y - 1].area;
      }
      if (x === 5 && y !== 0) {
        newCell.innerHTML = arr[y - 1].capital;
      }
      if (x === 6 && y !== 0) {
        newCell.innerHTML = arr[y - 1].timezone;
      }
      if (x === 7 && y !== 0) {
        newCell.innerHTML = arr[y - 1].income;
      }
    }
    y++;
  }
  document.body.appendChild(table);
}
xhr.send(null);