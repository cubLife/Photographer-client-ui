import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
export default class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photographer: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8081/api/photographers/1")
      .then((response) => response.data)
      .then((data) => this.setState({ photographer: data }));
  }

  render() {
    return (
      <div>
        <Card border="light" className="mt-3 shadow-lg p-1 mb-5 bg-white right">
          <Card.Body>
            <Card.Title>
              <i class="bi bi-telephone-outbound" />
              <a
                href={"tel:" + this.state.photographer.phone}
                className="text-black text-decoration-none"
              >
                {" "}
                {"  " + this.state.photographer.phone}
              </a>
            </Card.Title>
            <Card.Title>
              <i class="bi bi-envelope" />
              <a
                href={"mailto:" + this.state.photographer.email}
                className="text-black text-decoration-none text-reset"
              >
                {"  " + this.state.photographer.email}
              </a>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
