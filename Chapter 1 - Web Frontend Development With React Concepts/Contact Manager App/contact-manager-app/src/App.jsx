import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ErrorPage from "./components/ErrorPage";
import ContactDetails from "./components/ContactDetails";
import ConfirmDeletion from "./components/ConfirmDeletion";

const LOCAL_STORAGE_KEY = "Contacts-list";

function App() {
	const localStorageContacts =
		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

	const [contacts, setContacts] = useState(localStorageContacts);

	function addContactHandler(contact) {
		setContacts([...contacts, { id: crypto.randomUUID(), ...contact }]);
	}

	function removeContactHandler(contactId) {
		const newContactList = contacts.filter(
			(contact) => contact.id !== contactId
		);

		setContacts(newContactList);
	}

	// * useEffect to persist data instead of setState
	// useEffect(() => {
	// 	const localStorageContacts =
	// 		JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

	// 	if (localStorageContacts) {
	// 		setContacts(localStorageContacts);
	// 	}
	// }, []);

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

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
