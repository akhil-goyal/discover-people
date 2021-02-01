document.addEventListener('DOMContentLoaded', () => {

    let sectionResults = document.querySelector('.section-results');
    let sectionPagination = document.querySelector('.section-pagination');

    async function apiHandler(apiUrl) {
        let response = await fetch(apiUrl);
        let data = await response.json();
        return data;
    }

    let getUsers = apiHandler(`https://reqres.in/api/users`);

    getUsers.then(users => {

        console.log(users);

        let paginationText = document.createElement('p');

        if (users.data.length === 0) {
            paginationText.innerText = ``
        } else {
            paginationText.innerText = `Displaying 1 to ${users.data.length} of ${users.total} users.`
        }

        sectionPagination.appendChild(paginationText);

        let paginationContainer = document.createElement('div');
        paginationContainer.className = 'page-numbers';

        sectionPagination.appendChild(paginationContainer);

        let buttonPrevious = document.createElement('p');
        buttonPrevious.innerText = 'Previous';

        paginationContainer.appendChild(buttonPrevious);



        for (let i = 1; i <= users.total_pages; i++) {

            let pageNumberContainer = document.createElement('div');
            paginationContainer.appendChild(pageNumberContainer);

            let pageNumber = document.createElement('p');
            pageNumber.innerText = i;

            pageNumberContainer.appendChild(pageNumber);
        }



        let buttonNext = document.createElement('p');
        buttonNext.innerText = 'Next';

        paginationContainer.appendChild(buttonNext);

        users.data.map(user => {

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

        })
    });

});