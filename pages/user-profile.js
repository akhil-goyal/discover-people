let sectionInfo = document.querySelector('.user-info');

// Converting the current page URL into a string.
let queryString = window.location.search;

// Getting the parameters out of the stringified URL.
let urlParameters = new URLSearchParams(queryString);

// Looking for the URL parameter with name "id".
let userId = urlParameters.get('id');

// Using fetch to call the API along with user ID received through
// URL parameter from home page.
fetch(`https://reqres.in/api/users/${userId}`)
    .then(response => response.json())
    .then(response => showData(response.data));

// Function showData that is responsbile for displaying
// the user data received through API's response.
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