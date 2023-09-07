import PropTypes from "prop-types";
import avatar from "../assets/avatar.jpg";

function ContactCard({ contact, removeContactHandler }) {
	const { id, name, email } = contact;

	return (
		<li className="list-decimal mb-3 border p-2 bg-gray-100">
			<div className="flex items-center gap-2">
				<img
					src={avatar}
					alt="user avatar"
					className="w-6 h-6 rounded-full object-cover"
				/>
				<h2 className="font-semibold">{name}</h2>
			</div>

			<div className="flex justify-between items-center">
				<h3>{email}</h3>
				<button
					className="border rounded-full bg-red-500 hover:bg-red-700 focus:bg-red-700 text-white px-3 py-1 "
					onClick={() => removeContactHandler(id)}
				>
					Delete
				</button>
			</div>
		</li>
	);
}

export default ContactCard;

ContactCard.propTypes = PropTypes.arrayOf(
	PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	})
).isRequired;
