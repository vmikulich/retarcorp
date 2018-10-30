let numb1 = document.getElementById('numb1');
let numb2 = document.getElementById('numb2');
let numb3 = document.getElementById('numb3');
let numb4 = document.getElementById('numb4');
let numb5 = document.getElementById('numb5');
let numb6 = document.getElementById('numb6');
let numb7 = document.getElementById('numb7');
let numb8 = document.getElementById('numb8');
let numb9 = document.getElementById('numb9');
let numb0 = document.getElementById('numb0');
let dot = document.getElementById('dot');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let equally = document.getElementById('equally');
let changeSign = document.getElementById('changeSign');

numb1.value = '1';
numb2.value = '2';
numb3.value = '3';
numb4.value = '4';
numb5.value = '5';
numb6.value = '6';
numb7.value = '7';
numb8.value = '8';
numb9.value = '9';
numb0.value = '0';
dot.value = '.'

let memoryHtml1 = document.getElementById('memory1');
let memory1 = '';
let memoryHtml2 = document.getElementById('memory2');
let memory2 = '';

dot.addEventListener('click', function(){
    memory1 += dot.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb1.addEventListener('click', function(){
    memory1 += numb1.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb2.addEventListener('click', function(){
    memory1 += numb2.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb3.addEventListener('click', function(){
    memory1 += numb3.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb4.addEventListener('click', function(){
    memory1 += numb4.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb5.addEventListener('click', function(){
    memory1 += numb5.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb6.addEventListener('click', function(){
    memory1 += numb6.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb7.addEventListener('click', function(){
    memory1 += numb7.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb8.addEventListener('click', function(){
    memory1 += numb8.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb9.addEventListener('click', function(){
    memory1 += numb9.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});
numb0.addEventListener('click', function(){
    memory1 += numb0.value;
    console.log(memory1);
    memoryHtml1.innerHTML = memory1;
});

let operation;
let operator = document.getElementById('operator');

plus.addEventListener('click', function(){
    memory2=memory1;
    memory1 = '';
    memoryHtml1.innerHTML = memory1;
    operation='+';
    operator.innerHTML = operation;
    memoryHtml2.innerHTML = memory2;
    console.log(operation);
})

minus.addEventListener('click', function(){
    memory2=memory1;
    memory1 = '';
    memoryHtml1.innerHTML = memory1;
    operation='-';
    operator.innerHTML = operation;
    memoryHtml2.innerHTML = memory2;
})

multiply.addEventListener('click', function(){
    memory2=memory1;
    memory1 = '';
    memoryHtml1.innerHTML = memory1;
    operation='*';
    operator.innerHTML = operation;
    memoryHtml2.innerHTML = memory2;
})

divide.addEventListener('click', function(){
    memory2=memory1;
    memory1 = '';
    memoryHtml1.innerHTML = memory1;
    operation='/';
    operator.innerHTML = operation;
    memoryHtml2.innerHTML = memory2;
})

changeSign.addEventListener('click', function(){
    memory1 *= -1;
    memoryHtml1.innerHTML = memory1;
})

let answerHtml = document.getElementById('answer');
let equallyHtml = document.getElementById('equally');
let equallySign = document.getElementById('equallySign');

let answer;
equallyHtml.addEventListener('click', function(){
    console.log(operation);
    switch(operation){
        case '+':
        {
            answer = Number(memory2) + Number(memory1);
            break;
        }
        case '-':
        {
            answer = Number(memory2) - Number(memory1);
            break;
        }
        case '*':
        {
            answer = Number(memory2) * Number(memory1);
            break;
        }
        case '/':
        {
            answer = Number(memory2) / Number(memory1);
            break;
        }
    }
    equallySign.innerText = '=';
    console.log(answer);
    answerHtml.innerHTML = answer;
});



let addMemory = document.getElementById('addMemory');
let memory;
addMemory.addEventListener('click', function(){
    memory = answer;
})

let setMemory = document.getElementById('setMemory');
setMemory.addEventListener('click', function(){
    memory1 = memory;
    memoryHtml1.innerHTML = memory1;
})

let clearMemory = document.getElementById('clearMemory');
clearMemory.addEventListener('click', function(){
    memory = '';
})

let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    memory1 = '';
    memory2 = '';
    answer = '';
    operation = '';
    memoryHtml1.innerHTML = memory1;
    memoryHtml2.innerHTML = memory2;
    equallySign.innerText = '';
    operator.innerHTML = operation;
    answerHtml.innerHTML = answer;
})

let clearLast = document.getElementById('clearLast');
clearLast.addEventListener('click', function(){
    memory1 = '';
    memoryHtml1.innerHTML = memory1;
})
