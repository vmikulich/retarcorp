const str = 'vladm1k453@gmail.com, gfgf4343@gmail.com,  +375298254395,  dima342@mail.ru, +343784621711';
const emails = str.split(', ')
                .map(el => el.trim())
                .filter(el => (el.match(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/)) != null);
console.log(emails);                

const operators = [];
emails.forEach(email => {
  let operator = email.split('@')[1];
  if (email.indexOf(operator) != -1 && operators.some(el => el === operator) == 0){
    operators.push(operator);
  }
});
console.log(operators);

const oper = operators.map(op => {
  return {
    name: op,
    amount: emails.reduce((p, c) => c.indexOf(op) != -1 ? p + 1 : p, 0)
  }
}).sort((a, b) => a.amount - b.amount);
console.log(oper);

const avgMinMax = oper.map(op => {
  const emailsWithOp = emails.filter(email => email.indexOf(op.name) != -1)
                             .sort((a, b) => a.length - b.length);
  const avg = emailsWithOp.reduce((p, c) => p + c.length, 0)/emailsWithOp.length;
  return {
    name: op.name,
    amount: op.amount,
    avg: avg,
    max: emailsWithOp[emailsWithOp.length - 1],
    min: emailsWithOp[0]
  }
});
console.log(avgMinMax);

const allMinMaxLength = emails.sort((a, b) => a.length - b.length);
console.log(`Min operator - ${allMinMaxLength[0]}\nMax operator - ${allMinMaxLength[allMinMaxLength.length - 1]}`);


const logins = [];
emails.forEach(email => {
  let login = email.split('@')[0];
  if (email.indexOf(login) != -1 && logins.some(el => el === login) == 0){
    logins.push(login);
  }
});
console.log(logins);

const loginsStr = logins.join('');
console.log(loginsStr);

const allLetters = loginsStr.split('');

const letters = [];
allLetters.forEach(letter => {
  if(letter.indexOf(letter) != -1 && letters.some(el => el === letter) == 0){
    letters.push(letter);
  }
})

const letts = []; 
console.log(letters); 
var count; 
letters.forEach(letter => { 
  count = 0; 
  allLetters.forEach(el => { 
  if(el == letter){ 
    count++ 
  } 
}) 
  let ob={ 
    name: letter, 
    amount: count 
  } 
  letts.push(ob); 
}) 
console.log(letts); 

const amountLetters = letts.sort((a, b) => a.amount - b.amount);
console.log(amountLetters);
