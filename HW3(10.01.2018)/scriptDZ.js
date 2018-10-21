let company = {
  emploies: [
    {
      name: 'Vlad',
      age: 18,
      salary: 1000,
      department: 'Cleaning',
      experience: 13*12,
      print: function() {
        console.log(`${this.name} - ${this.salary}`);
      }
    },
    {
      name: 'Oleg',
      age: 32,
      salary: 320,
      department: 'Cleaning',
      experience: 10*12,
      print: function() {
        console.log(`${this.name} - ${this.salary}`);
      }
    },
    {
      name: 'Vitaly',
      age: 18,
      salary: 300,
      department: 'Dodic',
      experience: 13*12,
      print: function() {
        console.log(`${this.name} - ${this.salary}`);
      }
    },
    {
      name: 'Kirill',
      age: 20,
      salary: 400,
      department: '',
      experience: 12*12,
      print: function() {
        console.log(`${this.name} - ${this.salary}`);
      }
    }
  ],
  printAll: function() {
    for(let i in this.emploies) {
      this.emploies[i].print();
    }
  },
  addEmployee: function(name, age, salary, department, experience) {
    this.emploies.push({name, age, salary, department, experience, print:function(){
      console.log(`${this.name} - ${this.salary}`);
    }})
  },
  removeEmployee: function(name) {
    for(let i in this.emploies) {
      if(name === this.emploies[i].name) {
        delete this.emploies[i];
      }
    }
  },
  maxMinAvgSalary: function() {
    let max = this.emploies[0];
    let min = this.emploies[0];
    let avg = 0;
    for(let i in this.emploies) {
      max = (this.emploies[i].salary > max.salary) ? this.emploies[i] : max;
      min = (this.emploies[i].salary < min.salary) ? this.emploies[i] : min;
      avg += this.emploies[i].salary;
    }
    console.log(`max salary - `);
    max.print();
    console.log(`min salary - `);
    min.print();
    console.log(`max avg - ${avg / this.emploies.length}`);
  }
}

company.printAll();
console.log('========');
company.addEmployee('Raul', 20, 300, 'Cooker', 10*12);
company.printAll();
console.log('========');
company.removeEmployee('Kirill');
company.printAll();
console.log('========');
company.maxMinAvgSalary();