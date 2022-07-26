//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let obj1 = '1';
let obj2 = '2';
let obj3 = 3;
let obj4 = 4;
let obj5 = 5.6;
let obj6 = 6.7;
let obj7 = true;
let obj8 = {type: 'string'};
let obj9 = [1, 2];
let obj10 = 10;

let arr = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10];

console.log(arr);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {title: 'title1', pageCount: 100, genre: 'genre1'};
let book2 = {title: 'title2', pageCount: 200, genre: 'genre2'};
let book3 = {title: 'title3', pageCount: 300, genre: 'genre3'};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив.
// Кожен автор має поля name,age

let book4 = {
    title: 'title4',
    pageCount: 400,
    genre: 'genre4',
    authors: [{name: 'author1', age: 1}, {name: 'author2', age: 2}]
};
let book5 = {
    title: 'title5',
    pageCount: 500,
    genre: 'genre5',
    authors: [{name: 'author4', age: 4}, {name: 'author5', age: 5}, {name: 'author6', age: 6}]
};
let book6 = {
    title: 'title6',
    pageCount: 600,
    genre: 'genre6',
    authors: [{name: 'author7', age: 7}, {name: 'author8', age: 8}, {name: 'author9', age: 9}]
};

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача


let usersArr = [
    {name: 'user1', username: 'username1', password: 'password1'},
    {name: 'user2', username: 'username2', password: 'password2'},
    {name: 'user3', username: 'username3', password: 'password3'},
    {name: 'user4', username: 'username4', password: 'password4'},
    {name: 'user5', username: 'username5', password: 'password5'},
    {name: 'user6', username: 'username6', password: 'password6'},
    {name: 'user7', username: 'username7', password: 'password7'},
    {name: 'user8', username: 'username8', password: 'password8'},
    {name: 'user9', username: 'username9', password: 'password9'},
    {name: 'user10', username: 'username10', password: 'password10'},
]

console.log(usersArr[0].password);
console.log(usersArr[1].password);
console.log(usersArr[2].password);
console.log(usersArr[3].password);
console.log(usersArr[4].password);
console.log(usersArr[5].password);
console.log(usersArr[6].password);
console.log(usersArr[7].password);
console.log(usersArr[8].password);
console.log(usersArr[9].password);