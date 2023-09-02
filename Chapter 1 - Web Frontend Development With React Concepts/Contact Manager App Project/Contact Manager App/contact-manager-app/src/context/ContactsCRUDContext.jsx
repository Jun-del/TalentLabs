import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import api from "../api/contacts";

const contactsCRUDContext = createContext();

export function ContactsCRUDContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  async function handleRetrieveContacts() {
    const response = await api.get("/contacts");
    if (response.data) {
      setContacts(response.data);
    }
  }

  async function addContactHandler(contact) {
    const request = {
      id: crypto.randomUUID(),
      ...contact,
    };

    const response = await api.post("/contacts", request);

    setContacts([...contacts, response.data]);
  }

  async function updateContactHandler(contact) {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;

    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      }),
    );
  }

  async function removeContactHandler(contactId) {
    setSearchTerm("");

    await api.delete(`/contacts/${contactId}`);

    const newContactList = contacts.filter(
      (contact) => contact.id !== contactId,
    );

    setContacts(newContactList);
  }

  function searchHandler(searchValue) {
    setSearchTerm(searchValue);

    if (searchValue !== "") {
      const newContactList = contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchValue.toLowerCase())
        );

        // * Dont include the id while searching
        // Object.values(contact)
        //   .join(" ")
        //   .toLowerCase()
        //   .includes(searchValue.toLowerCase());
      });

      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  }

  const value = {
    contacts,
    searchTerm,
    searchResult,
    handleRetrieveContacts,
    addContactHandler,
    updateContactHandler,
    removeContactHandler,
    searchHandler,
  };

  return (
    <contactsCRUDContext.Provider value={value}>
      {children}
    </contactsCRUDContext.Provider>
  );
}

// Custom hook
export function useContextCrud() {
  return useContext(contactsCRUDContext);
}

ContactsCRUDContextProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;
