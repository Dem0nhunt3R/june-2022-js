//- є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsonsBox = document.createElement('div');
simpsonsBox.classList.add('simpsonsBox');
simpsonsBox.style.display = 'flex';
simpsonsBox.style.flexWrap = 'wrap';
simpsonsBox.style.justifyContent = 'center';
document.body.appendChild(simpsonsBox);

for (const simpson of simpsons) {
    let simpsonDiv = document.createElement('div');
    simpsonDiv.style.width = '50%';
    simpsonDiv.style.textAlign = 'center';
    let h2 = document.createElement('h2');
    let age = document.createElement('p');
    let info = document.createElement('p');
    let photo = document.createElement('img');

    h2.innerText = simpson.name + ' ' + simpson.surname;
    age.innerText = 'Age: ' + simpson.age;
    info.innerText = simpson.info;
    photo.setAttribute('src', `${simpson.photo}`);
    photo.setAttribute('alt', `${simpson.name}`);

    simpsonDiv.append(h2, age, info, photo);
    simpsonsBox.appendChild(simpsonDiv);
}


// Цикл в циклі
// - Є масив
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

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

const coursesBox = document.createElement('div');
coursesBox.style.display = 'flex';
coursesBox.style.justifyContent = 'space-around';
coursesBox.style.flexWrap = 'wrap';
coursesBox.style.gap = '10px';
document.body.appendChild(coursesBox);

for (const course of coursesArray) {
    const courseDiv = document.createElement('div');
    courseDiv.style.border = '1px solid gray';
    courseDiv.style.width = '30%';
    const title = document.createElement('h2');
    title.style.textAlign = 'center';
    const durations = document.createElement('div');
    durations.style.display = 'flex';
    durations.style.justifyContent = 'center';
    const monthDuration = document.createElement('p');
    const hourDuration = document.createElement('p');
    const modules = document.createElement('ul');

    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        modules.appendChild(li);
    }

    title.innerText = course.title;
    monthDuration.innerText = 'Month duration: ' + course.monthDuration;
    hourDuration.innerText = 'Hour duration: ' + course.hourDuration;
    durations.append(monthDuration, hourDuration);

    courseDiv.append(title, durations, modules);
    coursesBox.appendChild(courseDiv);
}

// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const block = document.createElement('div');
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.background = 'blue';
block.style.color = 'white';
block.style.fontSize = '55px';
block.style.marginBottom = '5px';
block.innerText = 'THIS IS BLOCK MTHFCK';
document.body.appendChild(block);
const cloneNode = block.cloneNode(true);
document.body.appendChild(cloneNode);


// - Є масив:
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

//done

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

const coursesBox2 = document.createElement('ol');
document.body.appendChild(coursesBox2);

for (const course of coursesAndDurationArray) {
    const li = document.createElement('li');
    li.innerText = 'Title: ' + course.title + '. Month duration: ' + course.monthDuration;
    coursesBox2.append(li);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.

const coursesBox3 = document.createElement('div');
document.body.appendChild(coursesBox3);

for (const course of coursesAndDurationArray) {
    const item = document.createElement('div');
    item.classList.add('item');
    const title = document.createElement('h1');
    title.classList.add('heading');
    const duration = document.createElement('p');
    duration.classList.add('description');

    title.innerText = course.title;
    duration.innerText = 'Duration: ' + course.monthDuration + ' month';
    item.style.border = '1px solid black'
    item.append(title, duration);

    coursesBox3.appendChild(item);
}

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const text = document.createElement('h1');
text.setAttribute('id', 'text');
text.innerText = 'Text';
const button = document.createElement('button');
button.innerText = 'hide text';

button.onclick = () => {
    if (text.style.display === 'none') {
        button.innerText = 'hide text';
        text.style.display = 'block';
    } else {
        button.innerText = 'show text';
        text.style.display = 'none';
    }
}

document.body.append(text, button);

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
// інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const ageDiv = document.createElement('div');
const inputElement = document.createElement('input');
inputElement.setAttribute('name', 'age');
const buttonElement = document.createElement('button');
buttonElement.innerText = 'get age';
ageDiv.append(inputElement, buttonElement);
document.body.appendChild(ageDiv);

buttonElement.onclick = () => {
    if (inputElement.value < 18) {
        alert('your age is less than 18');
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const divElement = document.createElement('div');
const formElement = document.createElement('form');
formElement.setAttribute('name', 'form1');
divElement.appendChild(formElement);
const inputElement1 = document.createElement('input');
inputElement1.setAttribute('name', 'i1');
const inputElement2 = document.createElement('input');
inputElement2.setAttribute('name', 'i2');
const inputElement3 = document.createElement('input');
inputElement3.setAttribute('name', 'i3');
const buttonElement1 = document.createElement('button');
buttonElement1.innerText = 'click';
formElement.append(inputElement1, inputElement2, inputElement3, buttonElement1);
divElement.appendChild(formElement);
document.body.appendChild(divElement);

buttonElement1.onclick = (e) => {
    e.preventDefault();

    const wrapper = document.createElement('div');
    document.body.append(wrapper);
    wrapper.style.display = 'grid';

    const form1 = document.forms['form1'];
    const rows = form1.i1.value;
    const cells = +form1.i2.value;
    const data = form1.i3.value;

    wrapper.style.gridTemplateRows = rows;
    wrapper.style.columnGap = '10px';
    wrapper.style.rowGap = '10px';
    wrapper.style.width = '800px';
    wrapper.style.margin = '20px auto';

    for (let i = 0; i < rows * cells; i++) {
        wrapper.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
        const cell = document.createElement('div');
        cell.style.background = 'red';
        cell.innerText = data;
        cell.style.textAlign = 'center';
        wrapper.appendChild(cell);
    }

}