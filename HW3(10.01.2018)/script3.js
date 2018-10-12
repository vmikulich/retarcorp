function Mid(arr) {
  const mid = arr.sort((a, b) => a - b);
  if(arr.length % 2 != 0) {
    return mid[Math.floor(mid.length / 2)];
  }
  else {
    const a = mid[mid.length / 2 - 1];
    const b = mid[mid.length / 2];
    return Math.round((a + b) / 2);
  }
}

const arr = [4, 3, 1, 7];
const mid = Mid(arr);
console.log(mid);

const res = arr.map(el => (el - mid)**2)
               .reduce((prew, acc) => prew + acc, 0);
console.log(res/arr.length);