let v1 = 'hello';
let v2 = 'owu';
let v3 = 'com';
let v4 = 'ua';
let v5 = 1;
let v6 = 10;
let v7 = -999;
let v8 = 123;
let v9 = 3.14;
let v10 = 2.7;
let v11 = 16;
let v12 = true;
let v13 = false;

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);
console.log(v6);
console.log(v7);
console.log(v8);
console.log(v9);
console.log(v10);
console.log(v11);
console.log(v12);
console.log(v13);

// alert(v1);
// alert(v2);
// alert(v3);
// alert(v4);
// alert(v5);
// alert(v6);
// alert(v7);
// alert(v8);
// alert(v9);
// alert(v10);
// alert(v11);
// alert(v12);
// alert(v13);

document.write(v1 + '<br\>');
document.write(v2 + '<br\>');
document.write(v2 + '<br\>');
document.write(v3 + '<br\>');
document.write(v4 + '<br\>');
document.write(v5 + '<br\>');
document.write(v6 + '<br\>');
document.write(v7 + '<br\>');
document.write(v8 + '<br\>');
document.write(v9 + '<br\>');
document.write(v10 + '<br\>');
document.write(v11 + '<br\>');
document.write(v12 + '<br\>');
document.write(v13 + '<br\>');

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'firstName';
let middleName = 'middleName';
let lastName = 'lastName';

let fullName = `${firstName} ${middleName} ${lastName}`;

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//    let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let myFirstName = prompt('enter your firstName');
let myMiddleName = prompt('enter your middleName');
let myAge = prompt('enter your age');

console.log(myFirstName, myMiddleName, myAge);
