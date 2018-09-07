import React from 'react'
import MentorCard from '../components/MentorCard'

class CardContainer extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.users.map(user => <MentorCard user={user} />)}
      </div>
    )
  }

}

export default CardContainer
