import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import Login from './components/LoginForm';
import NavBar from './components/NavBar'
import CardContainer from './containers/CardContainer'
import NewUser from './components/CreateUserForm'
import MatchContainer from './containers/MatchContainer'
import Profile from './components/Profile'
import Filter from './components/Filter'
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
      user: {},
      allUsers: [],
      allMentors: [],
      allMentees: [],
      filteredMentors: [],
      user: null
    }
  }

  fetchUser = () => {
    requestHelper("http://localhost:3000/me").then(user => { this.updateUser(user)
  });
  }

  updateUser = user => {
    this.setState({ user });
  };

  userHasSkill = (user, skillName) => {
    return user.user_skills.filter(us => us.skill.name == skillName).length > 0 ? true : false
  }

  filterMentorsBySkill = (skillName) => {
    if (skillName === "No Filter") {
      this.setState({filteredMentors: this.state.allMentors})
    } else {
      let filteredMentors = this.state.allMentors.filter(mentor => this.userHasSkill(mentor, skillName))
      this.setState({filteredMentors})
    }
  }

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

  userHasMentor = (id) => {
    if (this.findUserById(this.state.user.id).mentor_matches.find(match => match.mentor_id == id)) {
      return true
    } else {
      return false
    }
  }

  addMentor = (mentorId) => {
    if (this.userHasMentor(mentorId)) {
      alert("You've already selected that mentor!")
    } else {
      fetch('http://localhost:3000/matches', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accepts": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          mentee_id: this.state.user.id,
          mentor_id: mentorId
        })
      }).then(r => r.json())
        .then(json => {
          this.fetchUsers()
          this.props.history.push('/profile')
        })
    }
  }

    deleteMatch = (matchId) => {
      fetch(`http://localhost:3000/matches/${matchId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "accepts": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          id: matchId
        })
      }).then(r => r.json())
        .then(json => {
          this.fetchUsers()
        })
    }

    findUserById=(id)=>{
      return this.state.allUsers.find(user=> user.id === id)
    }

    logOut = () => {
      this.setState({user: {}})
      localStorage.clear()
      this.props.history.push('/')
    }

  render() {

    return (
      <React.Fragment>
      <NavBar user={this.state.user} logOut={this.logOut}/>
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
        <Route exact path='/login' render={(props) => <Login {...props} updateUser={this.updateUser} />} />
        <Route exact path='/profile' render={() => (
          <React.Fragment>
            <Profile fetchUsers={this.fetchUsers} user={this.state.user} findUserById={this.findUserById}/>
            <MatchContainer user={this.state.user} findUserById={this.findUserById} deleteMatch={this.deleteMatch}/>
          </React.Fragment>
        )} />
        <Route path='/mentors' render={() => (
          <React.Fragment>
            <Filter filterFunction={this.filterMentorsBySkill}/>
            <CardContainer users={this.state.filteredMentors} addMentor={this.addMentor}/>
          </React.Fragment>
        )} />
        <Route exact path='/new_user' component={NewUser}/>

      </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
