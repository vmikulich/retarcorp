const employees = [
    {
        name: 'Alex',
        salary: 2000,
        department: 'Security',
        age: 20
    },
    {
        name: 'Ben',
        salary: 1500,
        department: 'Cleaning',
        age: 22
    },
    {
        name: 'Ann',
        salary: 2200,
        department: 'Cleaning',
        age: 30
    },
    {
        name: 'Jonh',
        salary: 1700,
        department: 'Cleaning',
        age: 28
    },
    {
        name: 'Paul',
        salary: 2500,
        department: 'Manager',
        age: 24
    },
    {
        name: 'Julia',
        salary: 2600,
        department: 'Manager',
        age: 29
    },
];

const avgSalary = [];
employees.reduce((acc, cur) => {
    if (acc.length === 0) {
        acc.push([cur]);
     }
    else {
        acc.forEach((el, index, arr) => {
            if (el[0].department === cur.department) {
                el.push(cur);
            }
            if (index === arr.length - 1 && el[0].department !== cur.department) {
                acc.push([cur]);
            }
        })
    }
    return acc;
}, [])
        .forEach(el => {
    el.sort((a, b) => a.salary - b.salary);
    console.log(`Max salary ${el[el.length - 1].salary} in ${el[0].department}`);
    avgSalary.push(el[el.length - 1].salary);
    console.log(`Avarage salary ${el.reduce((prew, acc) => prew + acc.salary, 0) / el.length} in ${el[0].department}`);
    console.log(`Avarage age ${el.reduce((prew, acc) => prew + acc.age, 0) / el.length} in ${el[0].department}`);
    console.log('\n');
});
console.log(`Avarage salary of max salaries ${Math.round(avgSalary.reduce((prew, acc) => prew + acc,0) / avgSalary.length)}`);
