import React, { Component } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import axios from "axios";
import OrderForm from "./OrderForm";
import { Alert, Snackbar } from "@mui/material";

export default class PhotoSessionOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          backdrop="static"
          keyboard={true}
          show={this.props.isOpen}
          onHide={this.props.onClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Zamów sesję zdjęciową</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <OrderForm
              onClose={this.props.onClose}
              photoSessionId={this.props.photoSessionId}
              sessionPackages={this.props.sessionPackages}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
