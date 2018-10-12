const coefs = [3, 2, 1];

const Polinom = coefs => {
   return x => {
    const res = coefs.reduce((prew, acc) => {
      return prew + acc*x**coefs.indexOf(acc);
    }, 0);
    return res;
  }
}

console.log(Polinom(coefs)(2)); 