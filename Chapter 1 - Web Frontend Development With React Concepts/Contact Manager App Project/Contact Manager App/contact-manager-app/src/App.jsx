import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContactsCRUDContextProvider } from "./context/ContactsCRUDContext";

import AddContact from "./components/AddContact";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ErrorPage from "./components/ErrorPage";
import ContactDetails from "./components/ContactDetails";
import ConfirmDeletion from "./components/ConfirmDeletion";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Header />
        <ContactsCRUDContextProvider>
          <Routes>
            <Route exact path="/" element={<ContactList />} />

            <Route exact path="/add" element={<AddContact />} />

            <Route exact path="/contact/:id/edit" element={<EditContact />} />

            <Route path="/contact/:id" element={<ContactDetails />} />

            <Route path="/contact/:id/delete" element={<ConfirmDeletion />} />

            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </ContactsCRUDContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
