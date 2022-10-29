import React, { Component } from "react";
import ContactLayout from "../components/Layout/ContactLayout";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1
          className="text-center text-uppercase mt-5"
          style={{ color: "black" }}
        >
          Skontaktuj się ze mną
        </h1>
        <ContactLayout />
      </div>
    );
  }
}
