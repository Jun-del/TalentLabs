import { useLocation, Link } from "react-router-dom";
import { UserCircle } from "lucide-react";

function ContactDetails() {
  const { state } = useLocation();
  const { name, email } = state.contact;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8 mt-20 flex flex-col items-center justify-center rounded-lg border bg-blue-100 p-8 shadow-lg">
        <UserCircle size={128} className="text-gray-500" />

        <h1 className="mt-8 text-5xl font-bold">{name}</h1>

        <p className="mt-2 text-2xl text-gray-500">{email}</p>
      </div>

      <Link to="/">
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Back
        </button>
      </Link>
    </div>
  );
}

export default ContactDetails;
