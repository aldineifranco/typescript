"use strict";
//number
let numero = 10;
numero = 16;
let numeroQuebrado = 2.5094;
console.log(numeroQuebrado);
// string
const primeiroNome = "Dinei";
console.log(primeiroNome);
// array
let number = [1, 2, 3];
number.push(5);
//Outra maneira
const nums = [100, 200];
nums.push(300, 400);
const userList = [
    { name: 'João', credit: 600 },
    { name: 'Maria', credit: 900 },
    { name: 'Carlos', credit: 300 },
    { name: 'Vanessa', credit: 200 },
];
// método para filtrar
const newUserList = userList.filter((userList) => userList.credit < 500);
// método para achar algo dentro do array
let achar = userList.find((userList) => userList.credit >= 200);
// reduzir para um elemento
const todosNumeros = [1, 2, 3, 4];
let totalGeral = todosNumeros.reduce((total, currentElement) => total + currentElement);
console.log(todosNumeros);
