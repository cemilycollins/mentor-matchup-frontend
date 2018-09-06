import React from 'react'

const Login = () => {
  return (
    <div style={{padding: '10%', width: '75%', margin: 'auto'}}>
      <h2>Sign In</h2>
      <form className="ui form">
        <div className="ui form field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className="ui form field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <button className="ui blue button" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login
