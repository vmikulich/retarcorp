const nameArr = ['Vlad', 'Pasha', 'Patric', 'Vitaly', 'Gena', 'Kirill'];
const cityArr = ['Moscow', 'Brest', 'Dublin', 'Minsk'];

function getRandom(a, b) {
    let e = Math.random();
    return Math.floor((b - a)*e + a);
  }

const N = nameArr.length;
const M = cityArr.length;
const peopleArr = new Array(N);
peopleArr.fill(0);
console.log(peopleArr);

const res = peopleArr.map((el) => {
  el = {
    name: nameArr[getRandom(0, N)],
    age: getRandom(15, 40),
    city: cityArr[getRandom(0, M)],
    print: function() {
      console.log(`${this.name} - ${this.city} - ${this.age}`)
    }
  }
  return el;
});
console.log(res);

const res1 = res.sort((a, b) => b.age - a.age)
                  .forEach(el =>  el.print());