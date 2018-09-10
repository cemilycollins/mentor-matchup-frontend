import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Login from './components/LoginForm';
import NavBar from './components/NavBar'
import CardContainer from './containers/CardContainer'
import NewUser from './components/CreateUserForm'
import './App.css';

const requestHelper = url =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(res => {
    if (res.status === 401) {
      alert("login failed");
    } else {
      return res.json();
    }
  });

class App extends Component {
  constructor() {
    super()
    this.state = {
      allUsers: [],
      allMentors: [],
      allMentees: [],
      filteredMentors: [],
      filter: '',
      user: null
    }
  }


  fetchUser = () => {
    requestHelper("http://localhost:3000/me").then(this.updateUser);
   }
   updateUser = user => {
    this.setState({ user });
  };

   fetchUsers= () =>{
     fetch('http://localhost:3000/users')
     .then(res=> res.json())
     .then(json=>{
       let mentors = this.filterByType(json,'mentor')
       let mentees = this.filterByType(json, 'mentee')

       this.setState({
       allUsers: json,
       allMentors: mentors,
       allMentees: mentees,
       filteredMentors: mentors
     })
   })
   }


  componentDidMount(){
    if (localStorage.getItem("token")) {
     this.fetchUser();
   }
   this.fetchUsers()
  }
  filterByType=(users,type)=>{
    return users.filter(user => user.type_of === type)
  }

  loginHandler=()=>{

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
        <Route exact path='/login' render={() => <Login updateUser={this.updateUser} />} />
        <Route path='/mentors' render={() => (
            <CardContainer users={this.state.filteredMentors} />
        )} />
        <Route exact path='/new_user' component={NewUser}/>

      </Switch>
      </React.Fragment>
    );
  }
}

export default App;
