//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

console.log('hello world'.length, 'lorem ipsum'.length, 'javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

'hello world'.toUpperCase();
'lorem ipsum'.toUpperCase();
'javascript is cool'.toUpperCase();

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

'HELLO WORLD'.toLocaleLowerCase();
'LOREM IPSUM'.toLocaleLowerCase();
'JAVASCRIPT IS COOL'.toLocaleLowerCase();

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';

str.trim();

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str2 = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


const stringsToArray = (str) => str.split(' ');

let arr = stringsToArray(str2)

console.log(arr);


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arr2 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

arr2.map((value, index) => arr2[index] = value + '');

console.log(arr2);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
let nums = [11, 21, 3, -3, 11, 0, 3213];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const sortNums = (arr, direction) => arr.sort((a, b) => direction === 'ascending' ? (a - b) : (b - a));

console.log(sortNums(nums, 'ascending'));

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration

coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);

//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);

//описати колоду карт

let cards = [
    {cardSuit: 'heart', value: 6, color: 'red'},
    {cardSuit: 'heart', value: 7, color: 'red'},
    {cardSuit: 'heart', value: 8, color: 'red'},
    {cardSuit: 'heart', value: 9, color: 'red'},
    {cardSuit: 'heart', value: 10, color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 6, color: 'red'},
    {cardSuit: 'diamond', value: 7, color: 'red'},
    {cardSuit: 'diamond', value: 8, color: 'red'},
    {cardSuit: 'diamond', value: 9, color: 'red'},
    {cardSuit: 'diamond', value: 10, color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: 6, color: 'black'},
    {cardSuit: 'spade', value: 7, color: 'black'},
    {cardSuit: 'spade', value: 8, color: 'black'},
    {cardSuit: 'spade', value: 9, color: 'black'},
    {cardSuit: 'spade', value: 10, color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'club', value: 6, color: 'black'},
    {cardSuit: 'club', value: 7, color: 'black'},
    {cardSuit: 'club', value: 8, color: 'black'},
    {cardSuit: 'club', value: 9, color: 'black'},
    {cardSuit: 'club', value: 10, color: 'black'},
    {cardSuit: 'club', value: 'jack', color: 'black'},
    {cardSuit: 'club', value: 'queen', color: 'black'},
    {cardSuit: 'club', value: 'king', color: 'black'},
    {cardSuit: 'club', value: 'ace', color: 'black'},
    {cardSuit: ['club', 'spade'], value: 'joker', color: 'black'},
    {cardSuit: ['diamond', 'heart'], value: 'joker', color: 'red'}
]

//  - знайти піковий туз

let find = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');

console.log(find);

//  - всі шістки

let sixFilter = cards.filter(card => card.value === 6);

console.log(sixFilter)

//  - всі червоні карти

let redFilter = cards.filter(card => card.color === 'red');

console.log(redFilter);

//  - всі буби

let diamondFilter = cards.filter(card => card.cardSuit === 'diamond' || (card.value === 'joker' && card.color === 'red'));

console.log(diamondFilter);

//  - всі трефи від 9 та більше

let clubBiggerThenNineEight = cards.filter(card => card.cardSuit === 'club' && (card.value > 8 || typeof card.value === 'string'));

console.log(clubBiggerThenNineEight);

//Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cards.reduce((acc, card) => {
    if (card.value === 'joker') {
        acc.jokers.push(card);
    }
    switch (card.cardSuit) {
        case 'spade':
            acc.spades.push(card);
            break;
        case 'diamond':
            acc.diamonds.push(card);
            break;
        case 'heart':
            acc.hearts.push(card);
            break;
        case 'club':
            acc.clubs.push(card);
            break;
    }

    return acc;
}, {spades: [], diamonds: [], hearts: [], clubs: [], jokers: []});

console.log(reduce);