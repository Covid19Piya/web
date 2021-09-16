import React, { Component } from "react";
import AccountSetup from "./form/AccountSetup";
import Sick from "./form/Sick";
import Address from "./form/Address";
import Confirm from "./form/Confirm";
import Success from "./form/Success";

export class Request extends Component {
  state = {
    step: 1,
    name: "",
    age: "",
    phone: "",
    gender: "",

    facebook: "",
    twitter: "",
    github: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  inputChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { name, email, phone, password, facebook, twitter, github } =
      this.state;
    const values = { name, email, phone, password, facebook, twitter, github };

    switch (step) {
      case 1:
        return (
          <AccountSetup
            nextStep={this.nextStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 2:
        return (
          <Sick
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 3:
        return (
          <Address
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            inputChange={this.inputChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
    }
  }
}

export default Request;
