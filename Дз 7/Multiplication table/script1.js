window.onload = function() {
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
  this.document.body.appendChild(table);
}