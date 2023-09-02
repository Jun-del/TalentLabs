import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
};

function AddContact({ addContactHandler }) {
  const navigate = useNavigate();

  const [formState, setFormState] = useState(INITIAL_FORM_DATA);

  function handleSubmit(event) {
    event.preventDefault();

    if (formState.email === "" || formState.name === "") {
      alert("All the fields are mandatory");
      return;
    }

    addContactHandler(formState);
    setFormState(INITIAL_FORM_DATA);

    navigate("/");
  }

  return (
    <div className="flex p-4">
      <form onSubmit={handleSubmit} className="flex w-screen flex-col">
        <h1 className="mb-3 text-xl font-semibold ">Add Contact</h1>

        <hr className="mb-2 w-full border-b-2" />

        <div className="mb-4 border-b">
          <label
            className="mb-1 block font-semibold text-gray-700"
            htmlFor="name-input"
          >
            Name
          </label>
          <input
            className="focus:shadow-outline w-full rounded-sm border border-gray-700 px-3 py-2 leading-tight text-gray-700"
            id="name-input"
            type="text"
            placeholder="John Doe"
            value={formState.name}
            onChange={(e) => {
              setFormState({ ...formState, name: e.target.value });
            }}
          />
        </div>

        <div className="mb-4 border-b">
          <label
            className="mb-1 block font-semibold text-gray-700"
            htmlFor="email-input"
          >
            Email
          </label>
          <input
            className="focus:shadow-outline w-full rounded-sm border border-gray-700 px-3 py-2 leading-tight text-gray-700"
            id="email-input"
            type="email"
            placeholder="example@email.com"
            value={formState.email}
            onChange={(e) => {
              setFormState({ ...formState, email: e.target.value });
            }}
          />
        </div>

        <div>
          <button
            className="rounded bg-blue-500 px-4 py-1 text-white hover:bg-blue-700 focus:bg-blue-700"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;

AddContact.propTypes = {
  addContactHandler: PropTypes.func.isRequired,
};
