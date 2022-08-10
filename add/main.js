//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

const cutString = (str, n) => {
    let arr = [];
    for (let i = 0; i < str.length; i += n) {
        arr.push(str.substring(i, i + n));
    }

    return arr;
};

document.writeln(cutString('наслаждение', 3));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
let str = 'Каждый охотник желает знать';

const deleteCharacters = (str, length) => str.substring(0, length);

document.writeln(deleteCharacters(str, 7)); // Каждый
console.log(deleteCharacters(str, 7));

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі
// символи рядка необхідно перевести у верхній регістр.
let str2 = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

const insertDash = (str) => str.split(' ').join('-');

console.log(insertDash(str2));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

const firstLetterToUpCase = (str) => str[0].toUpperCase() + str.substring(1);

console.log(firstLetterToUpCase('asdsadasdasdasd'));

//- Дано список імен.
let n1 = 'Harry..Potter////WASD';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger   ';
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

const normalize = (str) => {
    const symbols = '!@#$%^&*()_+=-?/.,:;"\'';

    for (const symbol of symbols) {
        if (str.includes(symbol)) {
            str = str.replaceAll(symbol, ' ');
        }
    }

    return str.split(' ').filter(value => value !== '').join(' ');
}
console.log(normalize(n1));
console.log(normalize(n2));
console.log(normalize(n3));

//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const randomGenerator = () => {
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(Math.round(Math.random() * 100));
    }

    return arr;
};

console.log(randomGenerator())

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

let sort = randomGenerator().sort((a, b) => a - b);
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

let filter = randomGenerator().filter(value => value % 2 === 0 && value !== 0);
console.log(filter);

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

const capitalize = (str) => {
    return str.split(' ').map(value => value[0].toUpperCase() + value.substring(str[1], value.lenght)).join(' ');
}

console.log(capitalize('asdsad sadad asdasd sadsa'));

//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// - данні до знака равлика(@),
// - наявність равлика,
// - крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// - функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

let str3 = 'someemail@gmail.com';
let str4 = 'someeMAIL@gmail.com';
let str5 = 'someeMAIL@i.ua';
let str6 = 'some.email@gmail.com';

const emailValidator = (email) => {
    let s = email.toLowerCase();

    if (s.indexOf('@') === 0) {
        return 'Enter your email';

    }

    if (!s.includes('@')) {
        return 'Your email doesn\'t contain @';
    }

    if ((s.lastIndexOf('.') - s.indexOf('@')) <= 3) {
        return 'Enter correct mailbox';
    }

    return s;
}

console.log(emailValidator(str3));
console.log(emailValidator(str4));
console.log(emailValidator(str5));
console.log(emailValidator(str6));

//- є масивlet
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

coursesArray.sort((a, b) => a.modules.length - b.modules.length);

console.log(coursesArray);

//- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о", str7 = "Астрономия это наука о небесных объектах";

const charCounter = (str, char) => {
    let count = 0;
    let i = 0;

    while (i < str.length) {
        if (str[i].toLowerCase() === char.toLowerCase()) count++;
        i++;
    }

    return count;
}

document.writeln(charCounter(str7, symb));

//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str8 = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


const cutString2 = (str, n) => str.split(' ').filter((value, index) => index < n).join(' ');

console.log(cutString2(str8, 5));

//-стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {name: 'name1', pageCount: 2, authors: ['author1', 'author2', 'author3'], genres: ['genre1', 'genre2']},
    {name: 'name12', pageCount: 233, authors: ['author1'], genres: ['genre1', 'genre2']},
    {name: 'name111', pageCount: 222221, authors: ['author1'], genres: ['genre1', 'genre2', 'genre3']},
    {name: 'name11111222', pageCount: 22, authors: ['author1', 'author2', 'author3', 'author4'], genres: ['genre1']},
    {
        name: 'name1111',
        pageCount: 222,
        authors: ['author1', 'author2'],
        genres: ['genre1', 'genre2', 'genre3', 'genre4']
    },
]

// -знайти наібльшу книжку.

const getBiggestBook = (books) => {
    books.sort((a, b) => b.pageCount - a.pageCount);

    return books[0];
}

console.log(getBiggestBook(books));

// - знайти книжку/ки з найбільшою кількістю жанрів

const getLargestNumberOfGenres = (books) => {
    books.sort((a, b) => b.genres.length - a.genres.length);

    return books[0];
}

console.log(getLargestNumberOfGenres(books))

// - знайти книжку/ки з найдовшою назвою

const getLargestName = (books) => {
    books.sort((a, b) => b.name.length - a.name.length);

    return books[0];
}

// - знайти книжку/ки які писали 2 автори

let twoAuthorsFilter = books.filter(a => a.authors.length === 2);

console.log(twoAuthorsFilter)

// - знайти книжку/ки які писав 1 автор

let oneAuthorsFilter = books.filter(a => a.authors.length === 1);

console.log(oneAuthorsFilter)

// - вісортувати книжки по кількості сторінок по зростанню


console.log(books.sort((a, b) => a.pageCount - b.pageCount));