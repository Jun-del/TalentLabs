import { useLocation, Link } from "react-router-dom";
import { UserCircle } from "lucide-react";

function ContactDetails() {
	const { state } = useLocation();
	const { name, email } = state.contact;

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center mb-8 border rounded-lg shadow-lg p-8 bg-blue-100 mt-20">
				<UserCircle size={128} className="text-gray-500" />

				<h1 className="text-5xl font-bold mt-8">{name}</h1>

				<p className="text-gray-500 mt-2 text-2xl">{email}</p>
			</div>

			<Link to="/">
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Back
				</button>
			</Link>
		</div>
	);
}

export default ContactDetails;
