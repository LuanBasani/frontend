// Tipos de operadores

// operadores Aritméticos( + - * / %)

var a = 1;
var b = 3;
var c;

//Soma

c = a+b;
console.log("Soma: " + c);

//Subtração

c = a-b;
console.log("Subtração: " + c);

//Multiplicação

c = a*b;
console.log("Multiplicação: " + c);

//Divisão

c = a/b;
console.log("Divisão: " + c);

//Resto da Divisão

c = a%b;
console.log("Resto: " +c);

//Operadores relacionais(> < >= <= == === != !==)
var a = 10;
var b = 20;
var c = "20";

console.log("Relacionais: " + (a>b));
console.log("Igualdade simples: "+ (b==c))
console.log("Estrimamente igual: " + (b===c));
console.log(b+c);

// Operadores Lógicos ( && - AND, || - OUR, !- NOT)
var nota1= 5;
var nota2 = 8;

console.log("Aprovação : " + nota1 > 7 && nota2 >7);
console.log("Aprovação: " + nota1>7 || nota2 >7);
console.log("Negação: " + !true)