import React from "react";

export const ContactPicker = ({ contact, setContact, contacts }) => {

  return (
    <>
      <label>Contact: {contact}
        <select
          value={contact}
          onChange={e => setContact(e.target.value)}
          name="contact"
        >
          <option key="default" value="">No Contact Selected</option>
          {
            contacts.map((el, i) => {
              return <option key={i} value={el.name}>{el.name}</option>
            })
          }
        </select>
      </label>
    </>
  );
};
