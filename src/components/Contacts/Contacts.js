import React, { Component } from "react";
import Contact from "./Contact";

import "./contacts.css";
import maleIcon from "../../assets/img/male-icon.png";
import femaleIcon from "../../assets/img/female-icon.png";
import unknownIcon from "../../assets/img/unknown-icon.png";

const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
  },
];

class Contacts extends Component {
  state = {
    contacts: [...contacts.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))],
    search: "",
    gender: {
      male: true,
      female: true,
      unknown: true,
    },
  };

  setGenderImage(gender) {
    if (gender === "male") {
      return maleIcon;
    } else if (gender === "female") {
      return femaleIcon;
    } else {
      return unknownIcon;
    }
  }

  handleGenderChange = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    this.setState({
      gender: {
        male: this.state.gender.male,
        female: this.state.gender.female,
        unknown: this.state.gender.unknown,
        [name]: value,
      },
    });
  };

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });

    this.setState({
      contacts: [
        ...contacts.filter((el) => {
          return (
            el.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.phone.includes(e.target.value)
          );
        }),
      ],
    });
  };

  render() {
    return (
      <div className="Contacts">
        <div className="search-wrapper">
          <input
            value={this.state.search}
            onChange={this.handleSearchChange}
            placeholder="Search"
          />
        </div>
        {this.state.contacts.map((contact, i) => (
          <Contact
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            gender={this.setGenderImage(contact.gender)}
            key={i}
            contact={contact}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
