import PropTypes from "prop-types";
import ContactCard from "./ContactCard";

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
		<div>
			<hr className="w-full" />
			<ul className="p-6">{contactList}</ul>
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
