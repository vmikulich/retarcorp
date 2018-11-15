// for (let i = 0; i <= 10000; i++) {
//   console.log(Math.ceil((20 - 1) * Math.random() + 1));
// }

const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.txt', true);
xhr.onload = function() {
  const numbers = this.responseText.split('\n')
                                   .map(numb => Number(numb));

  const p1 = document.createElement('p');
  const avg = numbers.reduce((prew, acc) => prew + acc, 0);
  p1.innerHTML = `Avg - ${avg / numbers.length}`;

  const p2 = document.createElement('p');
  const garm = numbers.reduce((prew, acc) => prew + 1 / acc, 0);
  p2.innerHTML = `Garm - ${garm / numbers.length}`;

  document.body.appendChild(p1);
  document.body.appendChild(p2);
}
xhr.send(null);