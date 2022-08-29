const usersUrl = 'https://jsonplaceholder.typicode.com/users';
let userId = localStorage.getItem('userId');

const headingElement = document.createElement('h1');
headingElement.innerText = 'User information:';
headingElement.style.textAlign = 'center';
document.body.appendChild(headingElement)

const explorer = (obj) => {
    const props = [];

    getProp(obj);

    function getProp(o) {
        for (const key in o) {
            if (typeof o[key] === 'object') {
                getProp(o[key]);
            } else {
                props.push({[key]: o[key]})
            }
        }
    }

    return props;
}

fetch(usersUrl + '/' + userId)
    .then(res => res.json())
    .then(value => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-box')

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info-box', 'w90');

        const personalInfo = document.createElement('div');
        personalInfo.classList.add('info');
        const infoP = document.createElement('p');
        infoP.innerText = 'Personal:';
        infoP.classList.add('p1');
        personalInfo.appendChild(infoP);

        const addressInfo = document.createElement('div');
        addressInfo.classList.add('info');
        const addressP = document.createElement('p');
        addressP.classList.add('p1');
        addressP.innerText = 'Address:';
        addressInfo.appendChild(addressP);

        const companyInfo = document.createElement('div');
        companyInfo.classList.add('info');
        const companyP = document.createElement('p');
        companyP.classList.add('p1');
        companyP.innerText = 'Company:';
        companyInfo.appendChild(companyP);

        const userInfoArr = explorer(value);
        let userName = '';
        let nameCount = 0;

        for (const value of userInfoArr) {

            for (const key in value) {

                if (key === 'id'
                    || (key === 'name' && nameCount === 0)
                    || key === 'username'
                    || key === 'email'
                    || key === 'phone'
                ) {

                    if (key === 'name') {
                        userName = value[key];
                        nameCount++;
                    }

                    const paragraphElement = document.createElement('p');
                    paragraphElement.classList.add('p2');
                    paragraphElement.innerText = key + ': ' + value[key];
                    personalInfo.appendChild(paragraphElement);
                } else if (key === 'street'
                    || key === 'suite'
                    || key === 'city'
                    || key === 'zipcode'
                    || key === 'lat'
                    || key === 'lng') {
                    const paragraphElement = document.createElement('p');
                    paragraphElement.classList.add('p2');
                    paragraphElement.innerText = key + ': ' + value[key];
                    addressInfo.appendChild(paragraphElement);
                } else if ((key === 'name' && nameCount === 1)
                    || key === 'catchPhrase'
                    || key === 'bs') {
                    const paragraphElement = document.createElement('p');
                    paragraphElement.classList.add('p2');
                    paragraphElement.innerText = key + ': ' + value[key];
                    companyInfo.appendChild(paragraphElement);
                }


                infoDiv.append(personalInfo, addressInfo, companyInfo);
            }

        }

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('w90');

        const showPostsBtn = document.createElement('button');
        showPostsBtn.innerText = `Posts of ${userName}`;
        showPostsBtn.classList.add('posts-btn')
        buttonDiv.appendChild(showPostsBtn);

        showPostsBtn.onclick = () => {
            showPostsBtn.style.display = 'none';

            const postsBox = document.createElement('div');
            postsBox.classList.add('posts-box', 'w90');

            fetch(usersUrl + '/' + userId + '/posts')
                .then(res => res.json())
                .then(value => value.forEach(post => {
                    const postDiv = document.createElement('div');
                    postDiv.classList.add('post-card');

                    const postId = document.createElement('h3');
                    const postTitle = document.createElement('p');
                    postTitle.classList.add('post-title');
                    const postDetailsBtn = document.createElement('button');
                    postDetailsBtn.classList.add('post-details--button');

                    postId.innerText = 'Post ' + post.id;
                    postTitle.innerHTML =  `<b>Title:</b> ${post.title}`;
                    postDetailsBtn.innerText = 'details';
                    postDiv.append(postId, postTitle, postDetailsBtn);
                    postsBox.appendChild(postDiv);

                    postDetailsBtn.onclick = () => {
                        localStorage.setItem('postId', post.id);
                        localStorage.setItem('postDetails', JSON.stringify(post));
                        location.href = 'http://localhost:63342/june-2022-js/post-details/post-details.html';
                    }
                }));

            document.body.appendChild(postsBox);
        }


        userDiv.append(infoDiv, buttonDiv);

        document.body.appendChild(userDiv);
    });