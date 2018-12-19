import React from "react";
import { Route } from "react-router-dom";
import Champions from "./champions/Champions";
import Contact from "./contact/Contact";
import Highlight from "./highlight/Highlight";
import ThankYou from "./ThankYou";

class Landing extends React.Component {
  render() {
    const prefix = this.props.match.path;
    return (
      <React.Fragment>
        <Route path={prefix + "/championsList"} component={Champions} />
        <Route path={prefix + "/contact"} component={Contact} />
        <Route path={prefix + "/highlights"} component={Highlight} />
        <Route path={prefix + "/thankyou"} component={ThankYou} />
      </React.Fragment>
    );
  }
}

export default Landing;
