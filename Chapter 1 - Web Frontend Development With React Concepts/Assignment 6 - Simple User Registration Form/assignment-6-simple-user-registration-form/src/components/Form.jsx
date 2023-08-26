import React from "react";

const INITIAL_VALUE = {
	name: "",
	email: "",
	message: "",
};

function Form() {
	const [formData, setFormData] = React.useState(INITIAL_VALUE);

	function handleSubmit(event) {
		event.preventDefault();

		alert(JSON.stringify(formData, null, 2));
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name-input">Name: </label>
			<input
				type="text"
				name="name"
				id="name-input"
				value={formData.name}
				onChange={(e) => {
					setFormData({ ...formData, name: e.target.value });
				}}
			/>

			<br />

			<label htmlFor="email-input">Email: </label>
			<input
				type="email"
				name="email"
				id="email-input"
				onChange={(e) => {
					setFormData({ ...formData, email: e.target.value });
				}}
			/>

			<br />

			<label htmlFor="message-input">Message: </label>
			<input
				type="message"
				name="message"
				id="message-input"
				onChange={(e) => {
					setFormData({ ...formData, message: e.target.value });
				}}
			/>

			<br />

			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
