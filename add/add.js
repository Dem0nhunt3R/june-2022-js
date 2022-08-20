//- Є масив :
let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            companyName: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            companyName: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            companyName: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            companyName: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            companyName: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            companyName: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            companyName: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            companyName: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            companyName: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            companyName: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів
// створити свої окремі блок.
const explorer = (obj) => {
    let userProps = [];
    getProp(obj);

    function getProp(o) {
        for (const oKey in o) {
            if (typeof o[oKey] === 'object') {
                getProp(o[oKey]);
            } else {
                userProps.push({[oKey]: o[oKey]})
            }
        }
    }

    return userProps;
}

const usersBox = document.createElement('div');

usersBox.style.width = '1000px';
usersBox.style.margin = '0 auto';
usersBox.style.display = 'flex';
usersBox.style.flexWrap = 'wrap';
usersBox.style.gap = '20px';
usersBox.style.justifyContent = 'space-evenly';
document.body.appendChild(usersBox);

for (const user of usersList) {
    const userDiv = document.createElement('div');
    userDiv.style.border = '2px solid black';
    userDiv.style.width = '30%';
    userDiv.style.textAlign = 'center';
    const userProps = explorer(user);

    for (const userProp of userProps) {
        const userData = document.createElement('p');
        for (const key in userProp) {

            switch (key) {
                case 'street':
                    const address = document.createElement('p');
                    address.style.borderTop = '1px solid black'
                    address.innerText = 'Address:';
                    userDiv.appendChild(address);
                    break;
                case 'lat':
                    const geo = document.createElement('p');
                    geo.innerText = 'Geo:';
                    userDiv.appendChild(geo);
                    break;
                case 'companyName':
                    const companyName = document.createElement('p');
                    companyName.style.borderTop = '1px solid black';
                    companyName.innerText = 'Company:';
                    userDiv.appendChild(companyName);
                    break;

            }

            userData.innerText = key + ': ' + userProp[key];
            userDiv.appendChild(userData);
        }

    }

    usersBox.appendChild(userDiv);
}


// за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику
// headings,всі параграфи покласти в характеристику (масив) paragraphs

const tags = [];

const pageExplorer = (htmlElement) => {
    tags.push(htmlElement);
    const children = htmlElement.children;

    if (children !== 0) {
        for (const child of children) {
            pageExplorer(child)
        }
    }


}

const tagsSort = (tags) => {
    const headings = [];
    const paragraphs = [];

    tags.map(tag => {
        if (tag.tagName === 'P') {
            paragraphs.push(tag);
        }
        if (tag.tagName === 'H1' || tag.tagName === 'H2' || tag.tagName === 'H3' || tag.tagName === 'H4' ||
            tag.tagName === 'H5' || tag.tagName === 'H6') {
            headings.push(tag);
        }
    });

    return {headings, paragraphs};
}

pageExplorer(document.body);


// зробити div contenteditable ввести будь яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>

