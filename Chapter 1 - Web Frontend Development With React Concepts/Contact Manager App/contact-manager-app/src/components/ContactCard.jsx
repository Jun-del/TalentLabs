import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UserCircle2 as UserIcon } from "lucide-react";

function ContactCard({ contact }) {
	const { id, name, email } = contact;

	return (
		<li className="mb-3 border rounded-md p-2 bg-slate-100 list-none">
			<div className="flex items-center">
				<div className="mr-4">
					<UserIcon
						color="black"
						className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14"
					/>
				</div>

				<div className="hover:text-blue-500 font-medium">
					<Link to={`/contact/${id}`} state={{ contact: contact }}>
						<h2 className="text-lg font-semibold">{name}</h2>
						<h3 className="text-slate-600">{email}</h3>
					</Link>
				</div>

				<div className="ml-auto">
					<Link to={`/contact/${id}/delete`} state={{ contact: contact }}>
						<button className="border rounded-full bg-red-500 hover:bg-red-700 focus:bg-red-700 text-white px-3 py-1 ">
							Delete
						</button>
					</Link>
				</div>
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
