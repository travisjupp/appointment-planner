import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  function phoneFormat(e) {
    let areaCode, prefix, number;
    let ph = e.target.value;

    if (ph.length === 10) {
      areaCode = ph.slice(0, 3); console.log('areaCode', areaCode);
      prefix = ph.slice(3, 6); console.log('prefix', prefix);
      number = ph.slice(6, 10); console.log('number', number);
      let fn = areaCode + prefix + number; console.log('fn', fn);
      setPhone(`(${areaCode}) ${prefix}-${number}`);
    } else {
      setPhone(ph.replace(/\W/g, ""));
    }
  }
  return (
    <>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: {name}</label>
        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)}></input>
        <label htmlFor="phone">Phone: {phone}</label>
        <input type="tel" name="phone" id="phone" value={phone}
          pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}" maxLength={12} placeholder="(XXX) XXX-XXXX"
          onChange={phoneFormat}></input>
        <label htmlFor="email">Email: {email}</label>
        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}></input>
        <input type="submit" id="submit" value="Submit"></input>
      </form>
    </>
  );
};

