import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import api from "./api/contacts";

import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ErrorPage from "./components/ErrorPage";
import ContactDetails from "./components/ContactDetails";
import ConfirmDeletion from "./components/ConfirmDeletion";
import EditContact from "./components/EditContact";

function App() {
	const [contacts, setContacts] = useState([]);

	async function retrievedContacts() {
		const response = await api.get("/contacts");
		return response.data;
	}

	async function addContactHandler(contact) {
		const request = {
			id: crypto.randomUUID(),
			...contact,
		};

		const response = await api.post("/contacts", request);

		setContacts([...contacts, response.data]);
	}

	async function updateContactHandler(contact) {
		const response = await api.put(`/contacts/${contact.id}`, contact);
		const { id } = response.data;

		setContacts(
			contacts.map((contact) => {
				return contact.id === id ? { ...response.data } : contact;
			})
		);
	}

	async function removeContactHandler(contactId) {
		await api.delete(`/contacts/${contactId}`);

		const newContactList = contacts.filter(
			(contact) => contact.id !== contactId
		);

		setContacts(newContactList);
	}

	useEffect(() => {
		const getAllContacts = async () => {
			const allContacts = await retrievedContacts();

			if (allContacts) {
				setContacts(allContacts);
			}
		};

		getAllContacts();
	}, []);

	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						exact
						path="/"
						element={
							<ContactList
								contacts={contacts}
								removeContactHandler={removeContactHandler}
							/>
						}
					/>

					<Route
						exact
						path="/add"
						element={<AddContact addContactHandler={addContactHandler} />}
					/>

					<Route
						exact
						path="/edit"
						element={
							<EditContact updateContactHandler={updateContactHandler} />
						}
					/>

					<Route path="/contact/:id" element={<ContactDetails />} />

					<Route
						path="/contact/:id/delete"
						element={
							<ConfirmDeletion removeContactHandler={removeContactHandler} />
						}
					/>

					<Route exact path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
