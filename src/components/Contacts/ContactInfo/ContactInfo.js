import React from "react";

import s from "./ContactInfo.module.css";

const ContactInfo = (props) => {
  const closeContactInfo = (e) => {
    if (Array.from(e.target.classList).includes(s.contactInfo)) {
      props.history.goBack();
    }
  };

  return (
    <div className={s.contactInfo} onClick={closeContactInfo}>
      <div className={s.infoWrapper}>
        <div className={s.name}>
          <b>
            {props.contact.firstName} {props.contact.lastName}
          </b>
        </div>
        <div className={s.phone}>{props.contact.phone}</div>
        <div
          className={s.description}
        >{`Hello, my name is ${props.contact.firstName}. I'm 25 years old. I like React`}</div>
        <div className={s.messages}>
          <div className={s.myMessage}>Hello. how r u?</div>
          <div className={s.enemyMessage}>Fine. U?</div>
          <div className={s.myMessage}>Call me pls.</div>
          <div className={s.enemyMessage}>ok!</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
