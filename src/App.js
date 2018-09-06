import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './components/LoginForm';
import NavBar from './components/NavBar'
import CardContainer from './containers/CardContainer'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allMentors: [],
      filteredMentors: [],
      filter: ''
    }
  }

  render() {
    return (
      <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => (
            <React.Fragment>
              <div id="welcome">
                <h2>Welcome to Mentor Matchup!</h2>
                <h3>Log in or create a new user account to get started.</h3>
                <Link className="ui blue button" to="/login">Log In</Link>
                <Link className="ui button" to="/new_user">Create New User</Link>
              </div>
            </React.Fragment>
          )} />
        <Route exact path='/login' render={Login} />
        <Route path='/mentors' render={() => (
            <CardContainer users={this.state.filteredMentors}/>
        )} />

      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
