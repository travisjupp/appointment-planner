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

  return (
    <>
      <form id="appointmentForm" name="appointmentForm" onSubmit={handleSubmit} method="post" data-netlify="true">
        <label>Title: {title}
          <input type="text" id="title" name="name" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>Date: {date}
          <input type="date" id="date" name="date" min={getTodayString()} value={date} onChange={e => setDate(e.target.value)} />
        </label>
        <label>Time: {time}
          <input type="time" id="time" name="time" value={time} onChange={e => setTime(e.target.value)} />
        </label>
        <ContactPicker contact={contact} contacts={contacts} setContact={setContact} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
