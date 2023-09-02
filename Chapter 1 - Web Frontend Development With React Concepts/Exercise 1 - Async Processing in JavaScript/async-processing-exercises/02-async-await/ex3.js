// This  exercise is same as 01-promise ex3.js, just that we want to do it in
// synchronous way with async/await

// This is the continue of ex2.js
// In this exercise, we want you to filter the result based on their user id
// We would only want to keep the users with odd number as user id

// Hint: You can use any method to filter them out,
// but the easiest is to convert then into an object, then use the JavsScript filter function
// If you forget how to do that, you can reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const axios = require("axios");

// Write you code below
const callAPI = async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users"
	);

	const data = await response.data;

	const filteredUser = data.filter((user) => {
		return user.id % 2 !== 0;
	});

	console.log(JSON.stringify(filteredUser, undefined, 2));
	alert(JSON.stringify(filteredUser, undefined, 2));
};
// DO NOT EDIT THE CODE BELOW
callAPI();

// Expected Output: Same as ex2, but only with users of odd number user ID
