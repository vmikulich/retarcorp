let str = prompt('Enter str');
let a=0;
for(let i=0; i<str.length; i++){
    if(str[i]==')'){
        for(a; a<i; a++){
            if(str[a]=='(') {
                a++; 
                break;
            }
        }
        if(a==i) {
            alert("Invalide");
            break;
        }
    }
}