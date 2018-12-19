import React from "react";
import { Link } from "react-router-dom";
import "./homePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <header class="masthead text-center text-white d-flex ">
        <div class="container my-auto ">
          <div class="row">
            <div class="col-lg-12 pushDown">
              <h3 class="text-uppercase pb-2">
                <strong>
                  Today we fight each other. Tomorrow, we may fight together.
                </strong>
              </h3>
              <Link
                class="btn btn-primary btn-xl js-scroll-trigger"
                to="lolChams/championsList"
              >
                Let's Explore More
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HomePage;
