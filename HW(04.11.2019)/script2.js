let N = prompt("Enter N");
let x = prompt("Enter x");
let a= new Array();
for(let i=0; i<N; i++){
    a[i]=prompt(`Enter a${i} `);
}
let s=0;
for(let i=0; i<N; i++){
    s+=a[i]*x;
}
for(let i=0; i<N; i++){
    document.write(` a[${i}]*x `);
    if(i+1<N) document.write('+');
    else document.write('= ');
}
document.write(s);
let s1=0;
for(let i=0; i<N; i++){
    s1+=a[i]*x**i;
}
document.write(`<br \/>`);
for(let i=0; i<N; i++){
    document.write(` a[${i}]*x^${i} `);
    if(i+1<N) document.write('+');
    else document.write('= ');
}
document.write(s1);