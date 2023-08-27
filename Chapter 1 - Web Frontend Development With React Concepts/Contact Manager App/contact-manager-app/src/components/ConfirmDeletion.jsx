import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmDeletion({ removeContactHandler }) {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { id, name, email } = state.contact;

	return (
		<div className="fixed inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen">
				<div className="bg-white-100 rounded-lg shadow-lg shadow-slate-400 p-6 w-full max-w-md flex flex-col">
					<h2 className="text-lg font-bold mb-4">
						Do you want to delete the following user?
					</h2>

					<p className="mb-4">
						<span className="text-lg font-semibold">Name: </span>
						{name}
					</p>
					<p className="mb-4">
						<span className="text-lg font-semibold">Email: </span>
						{email}
					</p>

					<div className="flex justify-end">
						<button
							className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded mr-2"
							onClick={() => {
								removeContactHandler(id);
								navigate("/");
							}}
						>
							Delete
						</button>

						<button
							className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded"
							onClick={() => navigate(-1)}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

ConfirmDeletion.propTypes = {
	removeContactHandler: PropTypes.func.isRequired,
};

export default ConfirmDeletion;
