import React, { Component } from "react";
import { postMessage } from "../../service/message.service";
import "./contact.css";

class Contact extends Component {
  state = {
    fullName: "",
    email: "",
    message: ""
  };

  handlerInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  submitFormMessage = e => {
    e.preventDefault();
    const { fullName, email, message } = this.state;
    postMessage({
      fullName,
      email,
      message
    })
      .then(response => {
        console.log(response);
        this.props.history.push("./thankyou");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-12 col-md-8 col-lg-6 pb-5"
            style={{
              marginBottom: "110px",
              paddingTop: "90px"
            }}
          >
            <form class="rounded-0" onSubmit={this.submitFormMessage}>
              <div class="card border-primary rounded-0">
                <div
                  class="card-header p-0 "
                  style={{ backgroundColor: "rgba(22, 82, 162, 0.85)" }}
                >
                  <div class="text-white text-center py-2">
                    <h3>
                      <i class="fa fa-envelope" /> Contact Us
                    </h3>
                    <p class="m-0">We will gladly help you</p>
                  </div>
                </div>
                <div class="card-body p-3">
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-user text-info" />
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Full Name"
                        name="fullName"
                        value={this.state.fullName}
                        onChange={this.handlerInputChange}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-envelope text-info" />
                        </div>
                      </div>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Enter Your Email"
                        value={this.state.email}
                        onChange={this.handlerInputChange}
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <i class="fa fa-comment text-info" />
                        </div>
                      </div>
                      <textarea
                        class="form-control"
                        name="message"
                        placeholder="Enter Your Message"
                        value={this.state.message}
                        onChange={this.handlerInputChange}
                      />
                    </div>
                  </div>

                  <div class="text-center">
                    <input
                      type="submit"
                      value="Submit"
                      class="btn btn-primary btn-large rounded-0 py-2 "
                      style={{
                        backgroundColor: "rgba(22, 82, 162, 0.85)",
                        color: "white"
                      }}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
