import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContact] = useState([]); // array of contacts
  const [appointments, setAppointment] = useState([]); // array of appointments
  /*
  Implement functions to add data to
  contacts and appointments
  */
  function addContact(contact) { // callback function that adds a new contact object to the contacts array

    setContact((prev) => {
      return [...prev, contact]
    });
  };

  function addAppointment({ name, contact, date, time }) { // callback function that adds a new appointment to the appointments array
    setAppointment({
      name,
      contact,
      date,
      time
    });
  };
  console.log('last contact',contacts[contacts.length -1],'\ncontacts',contacts);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage addContact={addContact} contacts={contacts} /> /* Add props to ContactsPage */} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage addAppointment={addAppointment} appointments={appointments} /> /* Add props to AppointmentsPage */} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
