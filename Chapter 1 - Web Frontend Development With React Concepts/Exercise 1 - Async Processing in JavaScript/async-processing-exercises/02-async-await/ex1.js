// This  exercise is same as 01-promise ex1.js, just that we want to do it in
// synchronous way with async/await

// In this exercise, we would like you to build a function,
// inside the function, it should call a simple API and print out the response from the API.
// You should use axios to call the API
// Do note that you will need to install the axios node module first

// Axios documentation: https://axios-http.com/docs/intro

// API to be call:
// GET https://jsonplaceholder.typicode.com/users

const axios = require("axios");

// Write you code below
const callAPI = async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/users"
	);

	console.log(response);
};
// DO NOT EDIT THE CODE BELOW
callAPI();

// Expected output (it looks ugly but you should at least see status code of 200):
// {status: 200, statusText: 'OK', headers: {…}, config: {…}, request: ClientRequest, …}
