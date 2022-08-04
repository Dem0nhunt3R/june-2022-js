//--створити масив з:
// - з 5 числових значень

let arrOfNumbers = [1, 2, 3, 4, 5];

for (const item of arrOfNumbers) {
    console.log(item);
}

// - з 5 стічкових значень

let arrOfStrings = ['1', '2', '3', '4', '5'];

for (const item of arrOfStrings) {
    console.log(item);
}

// - з 5 значень стрічкового, числового та булевого типу

let arrOfAllTypes = [1, '2', true, false, 5];

for (const item of arrOfAllTypes) {
    console.log(item);
}

// - та вивести його в консоль


//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];

for (let i = 0; i < 10; i++) {
    arr[i] = 'index = ' + i;
}

for (const element of arr) {
    console.log(element);
}
//є масив

let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let i2 = 0;
while (i2 < arr2.length) {
    console.log(arr2[i2]);
    i2++;
}

// 2. перебрати його циклом for

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i])
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i3 = 0;
while (i3 < arr2.length) {
    if ((i3 % 2) !== 0) {
        console.log(arr2[i3], i3);
    }
    i3++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if ((i % 2) !== 0) {
        console.log(element, i)
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i4 = 0;
while (i4 < arr2.length) {
    if (arr2[i4] % 2 === 0) {
        console.log(arr2[i4]);
    }
    i4++;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (element % 2 === 0) {
        console.log(element);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr2.length; i++) {
    const element = arr2[i];
    if (element % 3 === 0) {
        arr2[i] = 'okten';
    }
}

console.log(arr2)

// 8. вивести масив в зворотньому порядку.

for (let i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i]);
}

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

//1. перебрати його циклом while
let i5 = arr2.length - 1;
while (i5 >= 0) {
    console.log(arr2[i5], i5);
    i5--;
}

//2. перебрати його циклом for

for (let i = i5.length - 1; i >= 0; i--) {
    console.log(arr2[i], i);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let i6 = arr2.length - 1;
while (i6 >= 0) {
    if (i6 % 2 !== 0) {
        console.log(arr2[i6], i6);
    }
    i6--;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = arr2.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr2[i], i);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення

let i7 = arr2.length - 1;
while (i7 >= 0) {
    let item = arr2[i7];
    if (item % 2 === 0) {
        console.log(item);
    }
    i7--;
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = arr2.length - 1; i >= 0; i--) {
    const element = arr2[i];
    if (element % 2 === 0) {
        console.log(element);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = arr2.length - 1, n = 0; i >= 0; i--) {
    const element = arr2[i];
    //reverse to multiplе of 3
    if (element === 'okten') {
        arr2[i] = 3 * n;
        n += 1;
    }
}

console.log(arr2);

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numArr) {
    console.log(number);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let strArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

for (const string of strArr) {
    console.log(string);
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let anyTypeArr = [1, '2', 3, '4', true, false, [1, 2, 3], {name: 'name'}, 9, 10];

for (const element of anyTypeArr) {
    console.log(element);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr3 = [1, 's1', 3, 's2', true, false, 7, 's3', 9, 10];

for (const element of arr3) {
    if (typeof element === "boolean") {
        console.log(element);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr4 = [1, 's1', 3, 's2', true, false, 7, 's3', 9, 10];

for (const element of arr3) {
    if (typeof element === "number") {
        console.log(element);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr5 = [1, 's1', 3, 's2', true, false, 7, 's3', 9, 10];

for (const element of arr3) {
    if (typeof element === "string") {
        console.log(element);
    }
}

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.


let arr6 = [];

for (let i = 0; i < 10; i++) {

    if (i === 0) {
        arr6[i] = 'zero';
    } else if (i % 3 === 0) {
        if (i % 2 === 0) {
            arr6[i] = true
        } else {
            arr6[i] = false;
        }
    } else if (i % 4 === 0) {
        arr6[i] = 'str' + i;
    } else {
        arr6[i] = i;
    }
}

for (const element of arr6) {
    console.log(element);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write('Current step is ' + i + '<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write('Current step is ' + i + '<br>');
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i = i + 2) {
    console.log(i);
    document.write('Current step is ' + i + '<br>');
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write('even ' + i + '<br>');
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
        document.write('odd ' + i + '<br>');
    }
}

//стоврити масив книжок (назва, кількість сторінок, автори , жанри).

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
let maxPageCount = books[0].pageCount;

for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (book.pageCount > maxPageCount) {
        maxPageCount = book;
    }
}

console.log(maxPageCount);

// - знайти книжку/ки з найбільшою кількістю жанрів

let maxGenresBook = books[0];

for (let i = 0; i < books.length; i++) {
    let book = books[i];

    if (book.genres.length > maxGenresBook.genres.length) {
        maxGenresBook = book;
    }
}

console.log(maxGenresBook);

// - знайти книжку/ки з найдовшою назвою

let maxSizeBookName = books[0];

for (let i = 0; i < books.length; i++) {
    let book = books[i];

    if (book.name.length > maxSizeBookName.name.length) {
        maxSizeBookName = book;
    }

}

console.log(maxSizeBookName);

// - знайти книжку/ки які писали 2 автори

let twoAuthors = [];

for (const book of books) {
    if (book.authors.length === 2)
        twoAuthors[twoAuthors.length] = book;
}

console.log(twoAuthors)

// - знайти книжку/ки які писав 1 автор

let oneAuthor = [];

for (const book of books) {
    if (book.authors.length === 1)
        oneAuthor[oneAuthor.length] = book;
}

console.log(oneAuthor)

