import React from 'react'
import MentorCard from '../components/MentorCard'

class CardContainer extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.users.length > 0 ? this.props.users.map(user => <MentorCard id={user.id}  user={user} />): null}
      </div>
    )
  }

}

export default CardContainer
