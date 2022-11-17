import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactAlertInfo from "./ContactAlertInfo";

const schema = yup.object().shape({
  name: yup.string().required("Please input name"),
  email: yup.string().email().required("Email should be valid"),
  subject: yup.string().required("Please input subject"),
  message: yup.string().required("Please input message"),
});

function ContactMessageForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [severity, setSeverity] = React.useState("");

  const [alertMessage, setAlertMessage] = React.useState("");

  const sendEmail = (data) => {
    emailjs
      .send("service_e4pe6b8", "template_6k0qfkd", data, "ii9_8XyqV0SArSQGH")
      .then(
        function (response) {
          setOpen(true);
          setSeverity("success");
          setAlertMessage("Wiadomość została wysłana");
        },
        function (error) {
          setOpen(true);
          setSeverity("error");
          setAlertMessage("Wiadomość nie została wysłana.Spróbuj ponownie");
        }
      );
    reset();
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit(sendEmail)}
        className="mt-3 shadow-lg p-1 mb-5 bg-white rounded"
      >
        <Form.Group className="mb-3">
          <Form.Control
            name="name"
            type="text"
            placeholder="Imie"
            {...register("name")}
          />
        </Form.Group>
        <p className="text-danger">{errors.name?.message}</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email address"
            {...register("email")}
          />
        </Form.Group>
        <p className="text-danger">{errors.email?.message}</p>
        <Form.Group className="mb-3">
          <Form.Control
            name="subject"
            type="text"
            placeholder="Temat"
            {...register("subject")}
          />
        </Form.Group>
        <p className="text-danger">{errors.subject?.message}</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            name="message"
            as="textarea"
            rows={3}
            placeholder="Wiadomość"
            {...register("message")}
          />
        </Form.Group>
        <p className="text-danger">{errors.message?.message}</p>
        <Button type="submit" variant="success">
          Send
        </Button>
      </Form>
      <ContactAlertInfo
        isOpen={open}
        handleClose={handleClose}
        severity={severity}
        alertMessage={alertMessage}
      />
    </div>
  );
}

export default ContactMessageForm;
