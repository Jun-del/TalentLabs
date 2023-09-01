import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM_DATA = {
	name: "",
	email: "",
};

function AddContact({ addContactHandler }) {
	const navigate = useNavigate();

	const [formState, setFormState] = useState(INITIAL_FORM_DATA);

	function handleSubmit(event) {
		event.preventDefault();

		if (formState.email === "" || formState.name === "") {
			alert("All the fields are mandatory");
			return;
		}

		addContactHandler(formState);
		setFormState(INITIAL_FORM_DATA);

		navigate("/");
	}

	return (
		<div className="flex p-4">
			<form onSubmit={handleSubmit} className="flex flex-col w-screen">
				<h1 className="text-xl font-semibold mb-3 ">Add Contact</h1>

				<hr className="border-b-2 w-full mb-2" />

				<div className="mb-4 border-b">
					<label
						className="block text-gray-700 font-semibold mb-1"
						htmlFor="name-input"
					>
						Name
					</label>
					<input
						className="border rounded-sm w-full border-gray-700 py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
						id="name-input"
						type="text"
						placeholder="John Doe"
						value={formState.name}
						onChange={(e) => {
							setFormState({ ...formState, name: e.target.value });
						}}
					/>
				</div>

				<div className="mb-4 border-b">
					<label
						className="block text-gray-700 font-semibold mb-1"
						htmlFor="email-input"
					>
						Email
					</label>
					<input
						className="border rounded-sm border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:shadow-outline"
						id="email-input"
						type="email"
						placeholder="example@email.com"
						value={formState.email}
						onChange={(e) => {
							setFormState({ ...formState, email: e.target.value });
						}}
					/>
				</div>

				<div>
					<button
						className="rounded bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white py-1 px-4"
						type="submit"
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddContact;

AddContact.propTypes = {
	addContactHandler: PropTypes.func.isRequired,
};
