import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

export default class Login extends React.Component {
  handleSubmit = e => {
    let data = JSON.stringify({
      email: e.target.querySelector('input[name="email"]').value,
      password: e.target.querySelector('input[name="password"]').value
    });
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: data
    })
      .then(res => {
        if (res.status === 401) {
          alert("login failed");
        } else {
          return res.json();
        }
      })
      .then(json => {
        this.props.updateUser(json.user);
        localStorage.setItem("token", json.token);
        this.props.history.push('/profile')
      });
  };
  render(){
  return (
    <div style={{padding: '10%', width: '75%', margin: 'auto'}}>
      <h2>Sign In</h2>
      <Form onSubmit={this.handleSubmit}>
        <div className="ui form field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="ui form field">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="Password" />
        </div>
        <button className="ui blue button" type="submit">Log In</button>
      </Form>
    </div>
  );
}
};
