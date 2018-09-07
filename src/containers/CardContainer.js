import React from 'react'
import MentorCard from '../components/MentorCard'
import MentorDetail from '../components/MentorDetail'
import { Switch, Route } from 'react-router-dom'

class CardContainer extends React.Component {
  render() {
    return (
      <Switch>
        <Route to="/mentors/:user_id" render={ (props) => (<MentorDetail mentorId={props.user_id} />)} />
        <Route exact to="/mentors" render={() => (
          <div className="ui cards">
            {this.props.users.length > 0 ? this.props.users.map(user => <MentorCard user={user} />): null}
          </div>
        )} />
      </Switch>
    )
  }

}

export default CardContainer
