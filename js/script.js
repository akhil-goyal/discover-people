document.addEventListener('DOMContentLoaded', () => {

    let sectionResults = document.querySelector('.section-results');
    let sectionPagination = document.querySelector('.section-pagination');

    async function apiHandler(apiUrl) {

        let response = await fetch(apiUrl);
        let data = await response.json();

        return data;
    }

    let getUsers = apiHandler(`https://reqres.in/api/users?page=1`);

    getUsers.then(users => {

        console.log(users);

        let userArray = users.data;

        let paginationText = document.createElement('p');

        if (users.data.length === 0) {
            paginationText.innerText = ``
        } else {
            paginationText.innerText = `Displaying 1 to ${users.data.length} of ${users.total} users.`
        }

        sectionPagination.appendChild(paginationText);

        loopData(userArray);

    });

    function loopData(userArray) {

        sectionResults.innerHTML = '';

        userArray.map(user => {

            let userContainer = document.createElement('div');
            userContainer.className = 'user-avatar';

            sectionResults.appendChild(userContainer);

            let userAvatar = document.createElement('img');

            userAvatar.src = user.avatar;
            userAvatar.alt = 'User Avatar';

            userContainer.appendChild(userAvatar);

            let userName = document.createElement('p');

            userName.innerText = `${user.first_name} ${user.last_name}`;
            // userName.href = './pages/user-profile.html';

            userContainer.appendChild(userName);

            let userEmail = document.createElement('h6');

            userEmail.innerText = user.email;

            userContainer.appendChild(userEmail);

            let buttonView = document.createElement('button');
            buttonView.innerText = 'View';
            buttonView.className = 'button-view';

            userContainer.appendChild(buttonView);

            buttonView.addEventListener('click', function () {
                location.href = `${location.protocol}//${location.host}/pages/user-profile.html?id=${user.id}`;
            });
        });

    }

});