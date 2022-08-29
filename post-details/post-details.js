const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const postId = localStorage.getItem('postId');
const postDetails = JSON.parse(localStorage.getItem('postDetails'));

const explorer = (obj) => {
    const props = [];
    getProp(obj);

    function getProp(o) {
        for (const key in o) {
            if (typeof o[key] === 'object') {
                getProp(o[key]);
            } else {
                props.push({[key]: o[key]});
            }
        }
    }

    return props;
}

const postDetailsDiv = document.createElement('div');
postDetailsDiv.classList.add('post-details')

document.body.appendChild(postDetailsDiv);

const postInfoArr = explorer(postDetails);

for (const value of postInfoArr) {
    for (const key in value) {
        const paragraphElement = document.createElement('p');
        paragraphElement.innerText = key + ': ' + value[key];
        postDetailsDiv.appendChild(paragraphElement);
    }
}

fetch(postsUrl + '/' + postId + '/comments')
    .then(res => res.json())
    .then(value => {
        const commentsBox = document.createElement('div');
        commentsBox.classList.add('comments-box');

        value.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment-card');

            const commentInfoArr = explorer(comment);

            for (const value of commentInfoArr) {
                for (const key in value) {
                    const paragraphElement = document.createElement('p');
                    paragraphElement.innerText = key + ': ' + value[key];
                    paragraphElement.style.overflow='hidden';
                    commentDiv.appendChild(paragraphElement);
                }
            }

            commentsBox.appendChild(commentDiv);

        });

        document.body.appendChild(commentsBox)
    })