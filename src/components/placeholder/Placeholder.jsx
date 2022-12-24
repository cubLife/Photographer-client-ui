import React from "react";
import { Spinner } from "react-bootstrap";
import PlaceholderBootstrap from "react-bootstrap/Placeholder";
import "./placeholder.scss";

const Placeholder = () => {
  return (
    <div className="placeholderContainer">
      <PlaceholderBootstrap as="p" animation="glow">
        <PlaceholderBootstrap className="placeholder" />
      </PlaceholderBootstrap>
      <PlaceholderBootstrap as="p" animation="glow">
        <PlaceholderBootstrap className="placeholder" />
      </PlaceholderBootstrap>
      <PlaceholderBootstrap as="p" animation="glow">
        <PlaceholderBootstrap className="placeholder" />
      </PlaceholderBootstrap>
      <PlaceholderBootstrap as="p" animation="glow">
        <PlaceholderBootstrap className="placeholder" />
      </PlaceholderBootstrap>
    </div>
  );
};

export default Placeholder;
