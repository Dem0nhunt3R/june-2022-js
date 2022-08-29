const usersBox = document.createElement('div');
usersBox.classList.add('users-box');

document.body.appendChild(usersBox);

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(value => value.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        const userInfo = document.createElement('h3');
        const infoButton = document.createElement('button');

        if (user.id % 2 !== 0) userCard.style.backgroundColor = 'yellow';
        else userCard.style.backgroundColor = 'lightblue';
        
        userInfo.innerText = `${user.id} - ${user.name}`;
        infoButton.innerText = 'Details';

        infoButton.onclick = () => {
            localStorage.setItem('userId', user.id);
            location.href = 'user-details/user-details.html';
        }

        userCard.append(userInfo, infoButton);
        usersBox.appendChild(userCard);
    }))