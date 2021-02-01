// // List of users
// fetch('https://reqres.in/api/users')
// .then(response => response.json())
// .then(data => console.log('Data : ', data))
// .catch(error => console.log('Error while fetching user data : ', error));

// // Users list with page number
// fetch('https://reqres.in/api/users?page=2')
// .then(response => response.json())
// .then(data => console.log('Data : ', data))
// .catch(error => console.log('Error while fetching user data : ', error));

// Find user by ID
fetch('https://reqres.in/api/users/1')
.then(response => response.json())
.then(data => console.log('Data : ', data))
.catch(error => console.log('Error while fetching user data : ', error));