const arr = [4, 3, 1, 7];


function Mid(arr) {
  const mid = arr.sort((a, b) => a - b);
  if(arr.length % 2 != 0) {
    console.log(mid[Math.floor(mid.length / 2)]);
  }
  else {
    const a = mid[mid.length / 2 - 1];
    const b = mid[mid.length / 2];
    console.log(Math.round((a + b) / 2));
  }
}

Mid(arr);
