// This  exercise is same as 01-promise ex4.js, just that we want to do it in
// synchronous way with async/await

// The last part of thie promise exercise is to continue on ex3
// We want you to further tidy up the results, but only printing out the id, name, and phone number of the users
// remember that you still only need to print the odd number users

// Hint: Before your print, you can create a list of user objects with only id, name and phone number
// You can do it using the JavaScript Map function
// If you forgot about that, you can reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Write your code below

const axios = require("axios");

// Write you code below
const callAPI = async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users"
	);

	const users = response.data;

	const filteredUser = users
		.filter((user) => {
			return user.id % 2 !== 0;
		})
		.map((user) => {
			return {
				id: user.id,
				name: user.name,
				phone: user.phone,
			};
		});

	console.log(JSON.stringify(filteredUser, undefined, 2));
	alert(JSON.stringify(filteredUser, undefined, 2));
};

// DO NOT EDIT THE CODE BELOW
callAPI();

// Expected Output: Same as ex3, but each user object should have only id, name and phone number
// [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "phone": "1-770-736-8031 x56442"
//     },
//     {
//       "id": 3,
//       "name": "Clementine Bauch",
//       "phone": "1-463-123-4447"
//     },
//     {
//       "id": 5,
//       "name": "Chelsey Dietrich",
//       "phone": "(254)954-1289"
//     },
//     {
//       "id": 7,
//       "name": "Kurtis Weissnat",
//       "phone": "210.067.6132"
//     },
//     {
//       "id": 9,
//       "name": "Glenna Reichert",
//       "phone": "(775)976-6794 x41206"
//     }
//   ]
