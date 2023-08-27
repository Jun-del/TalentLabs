import PropTypes from "prop-types";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

function ContactList({ contacts, removeContactHandler }) {
	const contactList = contacts.map((contact) => {
		return (
			<ContactCard
				key={contact.id}
				contact={contact}
				removeContactHandler={removeContactHandler}
			/>
		);
	});

	return (
		<div className="flex flex-col">
			<div className="flex justify-between p-3 align-middle">
				<h2 className="text-2xl font-semibold p-2">Contact List</h2>

				<Link to={`/add`}>
					<button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 focus:bg-blue-700 text-white">
						Add Contact
					</button>
				</Link>
			</div>

			<hr className="border-b-2" />
			<ul className="p-3">{contactList}</ul>
		</div>
	);
}

ContactList.propTypes = PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	})
).isRequired;

export default ContactList;
