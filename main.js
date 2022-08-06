//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangleSquare = (a, b) => a * b;

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circleSquare = (r) => 3.14 * (r * r);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinderSquare = (h, r) => {
    const Pi = 3.14;
    return 2 * Pi * (r * r) + 2 * Pi * r * h;
}

// - створити функцію яка приймає масив та виводить кожен його елемент

const eachArrayElement = (arr) => {
    for (const element of arr) {
        console.log(element);
    }
}

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const paragraphCreator = (text) => {
    document.write(`<p>${text}</p>`)
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const ulCreator = (text) => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const ulCreator2 = (text, liNumber) => {
    document.write('<ul>');

    for (let i = 0; i < liNumber; i++) {
        document.write(`<li>${text}</li>`);
    }

    document.write('</ul>');
}

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const listCreator = (arr) => {
    document.write('<ul>');

    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }

    document.write('</ul>');
}


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const blockCreator = (arr) => {
    for (const element of arr) {
        document.write(`<div> id - ${element.id} name - ${element.name} age - ${element.age}</div>`)
    }
}

// - створити функцію яка повертає найменьше число з масиву

const minNum = (arr) => {
    let min = arr[0];

    for (const element of arr) {
        if (element < min) {
            min = element;
        }
    }

    return min;
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


const arrayElementsSum = (arr) => {
    let sum = 0;

    for (const element of arr) {
        sum += element;
    }

    return sum;
}