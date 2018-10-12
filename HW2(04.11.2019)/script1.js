let str = prompt('Enter str');
let a = 0;
let p = 0;

for(let i = 0; i < str.length; i++) {
    if(str[i] == ')') {
        for(; a < i; a++) {
            if(str[a] == '(') {
                a++; 
                break;
            }
        }
        if(a == i) {
            p++;
            alert("Invalide");
            break;
        }
    }
}

if (p == 0) alert('Valide');

// let i = 0;
// let j = 0;
//let arr = [];

//for(let i = 0; i < str.length; i++) {
    // if(str[i] === '(') {
    //     arr.push('(');
    //     i++;
    // }
    // else if (str[i] === ')') {
    //     arr.pop();
    //     j++;
    // }
//}

// if(arr.length === 0 && i === j) alert('valide');
// else alert('Invalide');