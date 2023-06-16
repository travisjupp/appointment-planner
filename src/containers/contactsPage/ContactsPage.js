import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    let formData = new FormData(e.target);
    let contact = Object.fromEntries(formData.entries());
    return isDuplicate ? <h2>Name is duplicate.</h2> : addContact(contact), setName(''), setPhone(''), setEmail('');
  };

  /*
  Using hooks, check for contact name in the )
  contacts array variable in props
  */
  useEffect(() => {
    contacts.find(el => el.name === name) ?
      setIsDuplicate(true) :
      setIsDuplicate(false);
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {isDuplicate && <h2>Name is duplicate.</h2>}
        <ContactForm
          name={name} phone={phone} email={email}
          setName={setName} setPhone={setPhone} setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
