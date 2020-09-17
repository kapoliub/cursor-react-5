import React from "react";
import { NavLink, Route } from "react-router-dom";

import ContactInfo from "./ContactInfo/ContactInfo";
import "./contacts.css";

const Contact = ({ firstName, lastName, gender, phone, contact }) => {
  return (
    <div className="Contact">
      <NavLink to={`/contacts/${lastName}`}>
        <div className="name-gender-field">
          <div className="name">
            {firstName} <b>{lastName}</b>
          </div>
          <div className="gender">
            <img src={gender} alt="gender_icon" />
          </div>
        </div>
        <div className="phone">{phone}</div>
      </NavLink>
      <Route
        path={`/contacts/${lastName}`}
        render={(props) => <ContactInfo {...props} contact={contact} />}
      />
    </div>
  );
};

export default Contact;
