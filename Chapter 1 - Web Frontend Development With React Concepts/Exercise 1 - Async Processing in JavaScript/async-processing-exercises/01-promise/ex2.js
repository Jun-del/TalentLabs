// This exercise is a continue of ex1.js
// we want you to call the same API using axios.
// When you are going to handle the response from the API,
// You should have 2 steps (i.e. 2 thens),
// Step 1: extract the data (JSON Object) from the response.
// Step 2: print the JSON object in a formatted way (nicely looking)

// Hint:
// Step 1 reference: https://jsonplaceholder.typicode.com/
// Step 2 reference: Previous chapters where we asked you to print user input nicely in an alert

// Write you code below
const axios = require("axios");

axios({
	method: "get",
	url: "https://jsonplaceholder.typicode.com/users",
})
	.then(function (response) {
		const data = response.data;

		return data;
	})
	.then(function (data) {
		const result = JSON.stringify(data, undefined, 2);
		console.log(result);
		alert(result);
	})
	.catch(function (error) {
		console.log(error);
	});

// Expected Output:
// [
//     {
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//         }
//       },
//       "phone": "1-770-736-8031 x56442",
//       "website": "hildegard.org",
//       "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//       }
//     },
//     ...
// ]
