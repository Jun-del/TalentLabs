import { useEffect } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useContextCrud } from "../context/ContactsCRUDContext";

function ContactList() {
  const {
    contacts,
    handleRetrieveContacts,
    searchTerm,
    searchResult,
    searchHandler,
  } = useContextCrud();

  useEffect(() => {
    handleRetrieveContacts();
  });

  const contactList = (searchTerm.length < 1 ? contacts : searchResult).map(
    (contact) => {
      return <ContactCard key={contact.id} contact={contact} />;
    },
  );

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-3">
          <h2 className="p-2 text-2xl font-semibold">Contact List</h2>

          <div>
            <Link to={`/add`}>
              <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 focus:bg-blue-700">
                Add Contact
              </button>
            </Link>
          </div>
        </div>

        <div className="flex w-9/12 items-center self-center">
          <input
            type="text"
            placeholder="Search Contacts"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
            className="my-2 w-full rounded-sm border-2 border-gray-400 px-2 py-1 hover:border-gray-600"
          />
        </div>
      </div>

      <hr className="border-b-2" />

      <div>
        <ul className="p-3">
          {contactList.length > 0 ? (
            contactList
          ) : (
            <h1 className="text-center text-2xl font-semibold text-red-500">
              No Contact Available
            </h1>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ContactList;
