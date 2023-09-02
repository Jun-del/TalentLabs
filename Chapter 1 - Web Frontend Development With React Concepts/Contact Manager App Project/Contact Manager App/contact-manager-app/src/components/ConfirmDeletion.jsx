import { useLocation, useNavigate } from "react-router-dom";
import { useContextCrud } from "../context/ContactsCRUDContext";

function ConfirmDeletion() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = state.contact;

  const { removeContactHandler } = useContextCrud();

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-y-auto bg-blue-100">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex w-full max-w-md flex-col rounded-lg border-2 bg-slate-50 p-6 shadow-lg shadow-slate-400">
          <h2 className="mb-4 text-xl font-bold text-red-700">
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

          <div className="flex flex-wrap justify-end gap-2">
            <button
              className="mr-2 rounded bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
              onClick={() => {
                removeContactHandler(id);
                navigate("/");
              }}
            >
              Delete
            </button>

            <button
              className="rounded border border-gray-300 px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeletion;
