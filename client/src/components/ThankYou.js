import React, { Component } from "react";

export default class ThankYou extends Component {
  render() {
    return (
      <div
        class="jumbotron text-center"
        style={{
          marginTop: "80px",
          marginBottom: "105px",
          paddingTop: "90px"
        }}
      >
        <h1 class="display-3">Thank You!</h1>
        <p class="lead">
          <strong>Please check your email</strong>
        </p>
        <hr />
        <p>
          Having concern? <a href="/lolChams/contact">Contact us</a>
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-sm" href="/" role="button">
            Continue to homepage
          </a>
        </p>
      </div>
    );
  }
}
