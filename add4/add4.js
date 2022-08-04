//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.

let arr1 = [];

for (let i = 0; i < 50; i++) {
    arr1[i] = i * 50;
}

console.log(arr1);

//        b. заповнити його 50 непарними числами за допомоги циклу.

let arr2 = [];

for (let i = 0; i < 50; i++) {
    arr2[i] = i * 50 + 1;
}

console.log(arr2);

//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

let arr3 = [];

for (let i = 0; i < 20; i++) {
    arr3[i] = Math.round(Math.random() * 100);
}

console.log(arr3)

//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let arr4 = [];

for (let i = 0; i < 20; i++) {
    arr4[i] = Math.floor(Math.random() * (732 - 8)) + 8;
}

console.log(arr4);

//  2. Вивести за допомогою console.log кожен третій елемен

for (let i = 0, j = 1; i < arr4.length; i++, j++) {

    if (j % 3 === 0) {
        console.log(arr4[i], j);
    }
}

//  3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

for (let i = 0, j = 1; i < arr4.length; i++, j++) {
    if (j % 3 === 0 && arr4[i] % 2 === 0) {
        console.log(arr4[i], j);
    }
}

//  4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

let newArr = [];

for (let i = 0, j = 1; i < arr4.length; i++, j++) {
    if (j % 3 === 0 && arr4[i] % 2 === 0) {
        console.log(arr4[i], j);
        newArr[newArr.length] = arr4[i];
    }
}

console.log(newArr);

//  5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

let arr5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];

for (let i = 0, j = 1; i < arr5.length - 1, j < arr5.length; i++, j++) {
    if (arr5[j] % 2 === 0) {
        console.log(arr5[i]);
    }
}

//  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let bills = [100, 250, 50, 168, 120, 345, 188];
let averageBill;
let temp = 0;

for (let i = 0; i < bills.length; i++) {
    temp += bills[i];
    if (i === bills.length - 1) {
        averageBill = Math.round(temp / bills.length);
    }
}

console.log(averageBill)

//  7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr6 = [];
let arr7 = [];

for (let i = 0; i < 10; i++) {
    arr6[arr6.length] = Math.round(Math.random() * 100);
}

for (let i = 0; i < arr6.length; i++) {
    const element = arr6[i];

    arr7[arr7.length] = element * 5;

    if (i === arr6.length - 1) {
        arr6 = [];
    }
}

console.log(arr6);
console.log(arr7);

//  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом
//  - додати його в інший масив.

let arr8 = [1, '2', true, false, {string: 'hola'}, [1, 2, 3], 2, 444, 'str'];
let numArr = [];

for (let i = 0; i < arr8.length; i++) {
    const element = arr8[i];

    if (typeof element === 'number') {
        numArr[numArr.length] = element;
    }
}

console.log(numArr)


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let usersWithCities = [];

//З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

for (let i = 0; i < usersWithId.length; i++) {
    for (const userAddress of citiesWithId) {
        let tempUser = {};
        if (userAddress.user_id === usersWithId[i].id) {
            tempUser.address = userAddress;
            for (const key in usersWithId[i]) {
                tempUser[key] = usersWithId[i][key];
            }
            usersWithCities[usersWithCities.length] = tempUser;
        }
    }
}


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of arr9) {
    if (number % 2 === 0) {
        console.log(number)
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати
// значення одного масиву в інший.

let arr10 = [];

for (const number of arr9) {
    arr10[arr10.length] = number;
}

console.log(arr10)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let chars = ['a', 'b', 'c'];
let str = '';

for (let j = 0; j < chars.length; j++) {
    str += chars[j];
}

console.log(str, 'for');


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let i = 0;
let str2 = '';

while (i < chars.length) {
    str2 += chars[i];
    i++;
}

console.log(str2, 'while');

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let str3 = '';

for (const char of chars) {
    str3 += char;
}

console.log(str3, 'forOf');