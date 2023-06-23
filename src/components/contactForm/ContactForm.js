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
      areaCode = ph.slice(0, 3);
      prefix = ph.slice(3, 6);
      number = ph.slice(6, 10);
      setPhone(`(${areaCode}) ${prefix}-${number}`);
    } else {
      setPhone(ph.replace(/\W/g, ""));
    }
  }
  return (
    <>
      <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
        <label>Name: {name}
          <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>Phone: {phone}
          <input type="tel" name="phone" id="phone" value={phone} pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
            maxLength="12" placeholder="(###) ###-####" onChange={phoneFormat} />
        </label>
        <label>Email: {email}
          <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <input type="submit" id="submit" value="Submit" />
      </form>
    </>
  );
};

