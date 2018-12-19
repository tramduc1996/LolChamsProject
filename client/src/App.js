import React, { Component } from "react";
import { Route } from "react-router-dom";
import Landing from "./components/Landing";
import HomePage from "./components/HomePage";
import Navbar from "./theme/Navbar";
import Footer from "./theme/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/lolChams" component={Landing} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
