const House = {
  flats: [
    {
      area: 50,
      number: 4,
      people: [
        {
          name: 'Vlad',
          age: 18
        },
        {
          name: 'Kirill',
          age: 40
        },
        {
          name: 'Pasha',
          age: 20
        }
      ]
    },
    {
      area: 20,
      number: 1,
      people: [
        {
          name: 'Vitaly',
          age: 17
        },
        {
          name: 'Ann',
          age: 17
        },
      ]
    },
    {
      area: 33,
      number: 3,
      people: [
        {
          name: 'Bill',
          age: 33
        },
        {
          name: 'Till',
          age: 40
        },
        {
          name: 'Gill',
          age: 15
        }
      ]
    },
    {
      area: 73,
      number: 2,
      people: [
        {
          name: 'Vlad',
          age: 18
        },
        {
          name: 'Alex',
          age: 40
        },
        {
          name: 'Pasha',
          age: 15
        },
        {
          name: 'Sasha',
          age: 20
        }
      ]
    }
  ],
  addOrRemovePerson: function(numb, element) {
   if (typeof element === 'object') {
    const res = House.flats.find(flat => flat.number === numb).people.push(element);
   }
   if (typeof element === 'string') {
    let res = House.flats.find(flat => flat.number === numb);
    res.people = res.people.filter(person => person.name !== element)
   }
},
  removePeople: function(numb) {
    const res = this.flats.forEach(flat => {
      if(flat.number === numb) flat.people.splice(0, flat.people.length);
    })
  },
  publicService: function(money) {
    const allArea = this.flats.reduce((prew, acc) => prew + acc.area, 0);
    const flatMoney = this.flats.filter(flat => flat.people.length > 0 && flat.people.some(person => person.age >= 18))
    if(this.flats.length != flatMoney.length) {
      var remind = this.flats.filter(flat => flat.people.length === 0 || flat.people.every(person => person.age < 18))
                             .reduce((p, c) => p + c.area, 0);
      const otherArea = Math.round(remind / flatMoney.length);
      console.log(flatMoney.length);
      console.log(otherArea);
    }
    const flatMoney1 = flatMoney.forEach(flat => {
                                  flat.m = Math.round((flat.area + remind)*money/allArea);
                                  flat.people = flat.people.filter(person => person.age >= 18);
                                  const mForPerson = Math.round(flat.m / flat.people.length);
                                  flat.people.forEach(person => person.moneyy = mForPerson); 
                                })
    return flatMoney;
  }
}
// console.log('=====================');
// console.log(House);
// console.log('=====================');
House.removePeople(2);
// console.log(House);
console.log('=====================');
// const obj = {
//   name: 'Dred',
//   age: 30
// }
// House.addOrRemovePerson(3, 'Bill');
// console.log(House);
House.publicService(1000);
console.log(House);