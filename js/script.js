document.addEventListener('DOMContentLoaded', () => {

    let sectionResults = document.querySelector('.section-results');

    async function apiHandler(apiUrl) {
        let response = await fetch(apiUrl);
        let data = await response.json();
        return data;
    }

    let getUsers = apiHandler(`https://reqres.in/api/users`);

    getUsers.then(users => users.data.map(user => {

        let userContainer = document.createElement('div');
        userContainer.className = 'user-avatar';

        sectionResults.appendChild(userContainer);

        let userAvatar = document.createElement('img');

        userAvatar.src = user.avatar;
        userAvatar.alt = 'User Avatar';

        userContainer.appendChild(userAvatar);

        let userName = document.createElement('h5');

        userName.innerText = `${user.first_name} ${user.last_name}`;

        userContainer.appendChild(userName);

        let userEmail = document.createElement('h6');

        userEmail.innerText = user.email;

        userContainer.appendChild(userEmail);

    }));

});