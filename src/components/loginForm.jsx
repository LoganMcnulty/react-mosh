import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from '../services/authService'
import {Redirect} from 'react-router-dom'

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const {data} = this.state
      await auth.login(data.username, data.password)
    // causes a full reload of application, so that app component is mounted again and get the JWT 

    console.log(this.props.location)
    const {state} = this.props.location
    window.location = state ? state.from.pathname : '/'

    } catch (err) {
      if (err.response && err.response.status === 400){
        const errors = {...this.state.errors}
        errors.username = err.response.data
        this.setState ({errors})
      }
    }

  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/"/>
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
