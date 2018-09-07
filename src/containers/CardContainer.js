import React from 'react'
import MentorCard from '../components/MentorCard'

class CardContainer extends React.Component {
  render() {
    console.log (`woot props `,this.props.users)
    return (
      <div>
        {this.props.users.length > 0 ? this.props.users.map(user => <MentorCard user={user} />): null}
      </div>
    )
  }

}

export default CardContainer
