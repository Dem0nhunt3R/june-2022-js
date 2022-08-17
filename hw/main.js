/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

let User = function (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

for (let i = 0; i < 10; i++) {
    users.push(new User(i + 1, 'name' + i, 'surname' + i, 'email' + i, 123 * i));
}

console.log(users);

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = users.filter(user => user.id % 2 === 0);

console.log(filter);

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.unshift(...users.splice(4, 5)); // prepare array to sort

users.sort((a, b) => a.id - b.id);

console.log(users);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0)
        clients.push(new Client(i + 1, 'name' + i, 'surname' + i, 'email' + i, 1234 * (i + 1), [1, 2]));
    else if (i % 3 === 0)
        clients.push(new Client(i + 1, 'name' + i, 'surname' + i, 'email' + i, 1234 * (i + 1), [1, 2, 3]));
    else
        clients.push(new Client(i + 1, 'name' + i, 'surname' + i, 'email' + i, 1234 * (i + 1), [1, 2, 3, 4]));
}

console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

let CarFunc = function (model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log('We drive with ' + this.maxSpeed + 'km per hour')
    }

    this.info = function () {
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, volume - ${this.volume}, driver - ${JSON.stringify(this.driver)}`)
    }

    this.increaseMaxSpeed = function (increase) {
        this.maxSpeed += increase;
    }

    this.changeYear = function (newYear) {
        this.year = newYear;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new CarFunc('model', 'manufacturer', 2020, 200, 2);

car.drive();
car.increaseMaxSpeed(20);
car.changeYear(2000);
car.addDriver({name: 'vasia', age: 22})
car.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class CarClass {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`We drive with ${this.maxSpeed}km per hour`);
    }

    info() {
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed - ${this.maxSpeed}, volume - ${this.volume}, driver - ${JSON.stringify(this.driver)}`)
    }

    increaseMaxSpeed(increase) {
        this.maxSpeed += increase;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let carClass = new CarClass('model', 'manufacturer', 2020, 200, 2);

carClass.drive();
carClass.increaseMaxSpeed(20);
carClass.changeYear(2000);
carClass.addDriver({name: 'vasia', age: 22})
carClass.info();

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let cinderellas = [];

for (let i = 0; i < 10; i++) {
    cinderellas.push(new Cinderella('cinderella ' + i, 20 + i, 30 + i));
}

let prince = new Prince('prince', 22, 37);

for (let i = 0; i < cinderellas.length; i++) {
    const cinderella = cinderellas[i];
    if (cinderella.size === prince.shoe)
        console.log('this is the one ====> ' + cinderella.name);
}

let find = cinderellas.find(cinderella=>cinderella.size===prince.shoe);
console.log(find)