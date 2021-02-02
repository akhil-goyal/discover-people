let sectionInfo = document.querySelector('.user-info');

let queryString = window.location.search;
let urlParameters = new URLSearchParams(queryString);
let userId = urlParameters.get('id');

fetch(`https://reqres.in/api/users/${userId}`)
    .then(response => response.json())
    .then(response => showData(response.data));

function showData(user) {
    
    let userImage = document.createElement('img');
    userImage.src = user.avatar;
    userImage.alt = 'User Avatar';

    sectionInfo.appendChild(userImage);

    let userIntro = document.createElement('h5');
    userIntro.innerText = `Hi! My name is ${user.first_name} ${user.last_name}.`

    sectionInfo.appendChild(userIntro);

    let userContact = document.createElement('h6');
    userContact.innerText = `You can reach me at ${user.email}`;

    sectionInfo.appendChild(userContact);

}