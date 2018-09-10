import React from 'react'
import MentorCard from '../components/MentorCard'
import MentorDetail from '../components/MentorDetail'
import { Switch, Route } from 'react-router-dom'

class CardContainer extends React.Component {

  findUser(id) {
    return this.props.users.find(user => user.id === parseInt(id))
  }

  render() {
    return (
      <Switch>
        <Route path="/mentors/:user_id" render={ (props) => (<MentorDetail user={this.findUser(props.match.params.user_id)} addMentor={this.props.addMentor}/>)} />
        <Route exact path="/mentors" render={() => (
          <div className="ui cards">
            {this.props.users.length > 0 ? this.props.users.map(user => <MentorCard user={user} />): null}
          </div>
        )} />
      </Switch>
    )
  }

}

export default CardContainer
