import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e) => {
    /*
    Add contact info and clear data  
    */
    let formData = new FormData(e.target);
    let appointment = Object.fromEntries(formData.entries());
    addAppointment(appointment);
    // netlify stateful react form handling



    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "appointmentForm", ...appointments[0] })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    // end netlify
    e.preventDefault();

    console.log('appointments', appointments);
    console.log('appointment', appointment);
    console.log('...appointments', ...appointments);
    // console.log('...appointment', ...appointment);

    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm title={title} setTitle={setTitle} contacts={contacts} contact={contact} setContact={setContact}
          date={date} setDate={setDate} time={time} setTime={setTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList contacts={appointments} />
      </section>
    </div>
  );
};