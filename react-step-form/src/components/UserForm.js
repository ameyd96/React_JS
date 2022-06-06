import React, { Component } from "react";

import FormUserDetail from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  //next step button click
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  //prev step button click
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  //handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;

    const values = { firstName, lastName, email, occupation, city, bio };
    //return <div>UserForm</div>;
    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={this.values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={this.values}
          />
        );
      case 3:
        return(
        <Confirm />);
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;
