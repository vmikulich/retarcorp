const arr = [1, 2, 3, 4, 5];


  const H = arr.reduce((prew, acc) => prew + 1/acc, 0);

console.log(H);