import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { UserCircle2 as UserIcon, PencilIcon, Trash2Icon } from "lucide-react";

function ContactCard({ contact }) {
  const { id, name, email } = contact;

  return (
    <li className="mb-3 list-none rounded-md border bg-slate-100 p-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="mr-4 flex flex-row items-center gap-2">
          <Link to={`/contact/${id}`} state={{ contact: contact }}>
            <UserIcon
              color="black"
              className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14"
            />
          </Link>

          <div className="font-medium hover:text-blue-500">
            <Link
              to={`/contact/${id}`}
              state={{ contact: contact }}
              className="flex flex-col"
            >
              <h2 className="text-lg font-semibold">{name}</h2>
              <h3 className="text-slate-600">{email}</h3>
            </Link>
          </div>
        </div>

        <div className="flex gap-3">
          <div>
            <Link to={"/edit"} state={{ contact: contact }}>
              <button className="flex items-center gap-2 rounded-full border bg-green-500 px-3 py-1 text-white hover:bg-green-700 focus:bg-green-700">
                <PencilIcon color="white" size={18} />
                Edit
              </button>
            </Link>
          </div>

          <div>
            <Link to={`/contact/${id}/delete`} state={{ contact: contact }}>
              <button className="flex items-center gap-2 rounded-full border bg-red-500 px-3 py-1 text-white hover:bg-red-700 focus:bg-red-700 ">
                <Trash2Icon color="white" size={20} />
                Delete
              </button>
            </Link>
          </div>
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
  }),
).isRequired;
