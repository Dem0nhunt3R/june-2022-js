// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x1 = -3;

if (x1 !== 0) {
    console.log('true');
} else {
    console.log('false');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// число (в першу, другу, третю или четверту частину години).

let time = +prompt('enter minutes');

if (time >= 0 && time < 15) {
    console.log('first quarter');
} else if (time >= 15 && time < 30) {
    console.log('second quarter');
} else if (time >= 30 && time < 45) {
    console.log('third quarter');
} else if (time >= 45 && time < 60) {
    console.log('fourth quarter');
} else {
    console.log('wrong number');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).


let dayOfMonth = +prompt('enter a day');

if (dayOfMonth >= 1 && dayOfMonth < 11) {
    console.log('first decade');
} else if (dayOfMonth >= 11 && dayOfMonth < 21) {
    console.log('second decade');
} else if (dayOfMonth >= 21 && dayOfMonth <= 31) {
    console.log('third decade');
} else {
    console.log('wrong number of a day');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


let dayOfWeek = prompt('enter a day');

switch (dayOfWeek) {
    case 'monday':
        console.log('first practice');
        break;
    case 'tuesday':
        console.log('first lecture');
        break;
    case 'wednesday':
        console.log('second practice');
        break;
    case 'thursday':
        console.log('second lecture');
        break;
    case 'friday':
        console.log('time to do a homework');
        break;
    case 'saturday':
        console.log('english');
        break;
    case 'sunday':
        console.log('whatever');
        break;
    default:
        console.log('you have entered incorect data');
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('first number');
let num2 = +prompt('second number');

if (num1 > num2) {
    console.log(num1 + ' > ' + num2);
} else if (num1 < num2) {
    console.log(num1 + ' < ' + num2);
} else {
    console.log(num1 + ' = ' + num2);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
// (хибноподыбне, тобто кастується до false)

let x2 = 'a';

let a = a || 'default';

console.log(a);