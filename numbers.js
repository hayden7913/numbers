var computeArea  = (w, h) => w*h;

console.log(computeArea(3,5));

var fahrToCel = (tempF) => (tempF - 32) * 5 / 9;
var celToFahr = (tempC) => tempC * 9 / 5 + 32;

console.log(celToFahr(100));
console.log(fahrToCel(32)); 

var isDivisible = (divisee, divisor) => divisee % divisor === 0;

console.log(isDivisible(18,5));