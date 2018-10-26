const str = prompt('Enter str');
const expr = /^(\+375|80)(29|25|44|33)(\d{7})$/;
if(str.match(expr)!= null) {
    alert('Valid');
}
else {
    alert('Invalid');
}