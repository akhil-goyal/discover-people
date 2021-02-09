//  Waiting for the document's content to be
//  loaded before performing any operation.
document.addEventListener('DOMContentLoaded', () => {

    let sectionResults = document.querySelector('.section-results');
    let sectionPagination = document.querySelector('.section-pagination');

    // Using async-await to handle the asynchronous response.
    // Setting apiUrl as parameter.
    async function apiHandler(apiUrl) {

        let response = await fetch(apiUrl);
        let data = await response.json();

        // Returning the json response from function apiHandler.
        return data;
    }

    // Using function expression to get data in variable getUsers.
    let getUsers = apiHandler(`https://reqres.in/api/users?page=1`);

    // Resolving the JSON data.
    getUsers.then(users => {

        // Putting the userdata in an array userArray
        let userArray = users.data;

        let paginationText = document.createElement('p');

        // Setting data for pagination. If there are zero users, then no
        // text would be displayed, however, if there are users, then
        // pagination text is being set dynamically.
        if (users.data.length === 0) {
            paginationText.innerText = ``
        } else {
            paginationText.innerText = `Displaying 1 to ${users.data.length} of ${users.total} users.`
        }

        sectionPagination.appendChild(paginationText);

        // Invoking the function loopData & 
        // setting userArray as an argument.
        loopData(userArray);

    });

    // Function loopDara that is responsible for looping through the
    // user data & displaying the results.
    function loopData(userArray) {

        // Mapping through the array of users data.
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

            userContainer.appendChild(userName);

            let userEmail = document.createElement('h6');

            userEmail.innerText = user.email;

            userContainer.appendChild(userEmail);

            let buttonView = document.createElement('button');
            buttonView.innerText = 'View';
            buttonView.className = 'button-view';

            userContainer.appendChild(buttonView);

            // Setting URL parameter on the click of a button. An user
            // id has been used to set the parameter such that the user
            // details may be retrieved on the following page.
            // buttonView.addEventListener('click', function () {
            //     location.href = `${location.protocol}//${location.host}/pages/user-profile.html?id=${user.id}`;
            // });

            buttonView.addEventListener('click', function () {
                location.href = `/discover-people/pages/user-profile.html?id=${user.id}`;
            });
        });

    }

});