// This is the continue of ex2.js
// In this exercise, we want you to filter the result based on their user id
// We would only want to keep the users with odd number as user id

// Hint: You can use any method to filter them out,
// but the easiest is to convert then into an object, then use the JavsScript filter function
// If you forget how to do that, you can reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// Write you code below
const axios = require("axios");

axios({
	method: "get",
	url: "https://jsonplaceholder.typicode.com/users",
})
	.then(function (response) {
		const users = response.data;

		const filteredUsers = users.filter((user) => {
			return user.id % 2 !== 0;
		});

		return filteredUsers;
	})
	.then(function (users) {
		console.log(JSON.stringify(users, undefined, 2));
		alert(JSON.stringify(users, undefined, 2));
	})
	.catch(function (error) {
		console.log(error);
	});

// Expected Output: Same as ex2, but only with users of odd number user ID
