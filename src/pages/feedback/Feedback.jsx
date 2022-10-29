import React, { Component } from "react";
import FeedbackForm from "../../components/FeedbackForm";
import FeedbackLayout from "../../components/Layout/FeedbackLayout";
import "./feedback.scss";

export default class Feedback extends Component {
  render() {
    return (
      <div className="feedbackContainer">
        <div className="left">
          <div className="top">
            <div className="title">Zostaw swoją opinię</div>
          </div>
          <FeedbackForm />
        </div>
        <div className="right">
          <div className="top">
            <div className="title">Opinie</div>
          </div>
          <FeedbackLayout />
        </div>
      </div>
    );
  }
}
