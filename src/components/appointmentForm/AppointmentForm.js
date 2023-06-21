import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  let today = getTodayString();

  return (
    <>
      <form id="appointmentForm" onSubmit={handleSubmit} >
        <label>Title: {title}
          <input type="text" id="title" name="name" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>Date: {date}
          <input type="date" id="date" name="date" min={today} value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <label>Time: {time}
          <input type="time" id="time" name="time" value={time} onChange={e => setTime(e.target.value)} />
        </label>
        {/* A ContactPicker component with the contacts list passed in via props */}
        <ContactPicker contact={contact} contacts={contacts} setContact={setContact} />
        {/* <label>Contact: {contact}
          <select 
          value={contact}
          onChange={e => setContact(e.target.value)}

          name="contact"
          >
            {
              contacts.map((el, i) => {
                return <option key={i} value={el.name}>{el.name}</option>
              })
            }
          </select>
        </label> */}
        <input type="submit" value="Submit" />

      </form>
    </>
  );
};
