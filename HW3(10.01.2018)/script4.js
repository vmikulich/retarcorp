const index = [65, 73, 66, 82, 71];


const str1 = index => {
  const res = index.reduce((prew, acc) => prew.concat(String.fromCharCode(acc)), ``);
  return res;
}

document.write(str1(index));