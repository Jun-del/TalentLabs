import { useState, useEffect } from "react";
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";

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

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
	}, [contacts]);

	return (
		<div>
			<Header />
			<AddContact addContactHandler={addContactHandler} />
			<ContactList
				contacts={contacts}
				removeContactHandler={removeContactHandler}
			/>
		</div>
	);
}

export default App;
