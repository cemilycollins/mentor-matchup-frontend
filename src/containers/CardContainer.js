import React from 'react'
import MentorCard from '../components/MentorCard'

class CardContainer extends React.Component {
  render() {
    console.log (`woot props `,this.props.users)
    return (
<<<<<<< HEAD
      <div>
        {this.props.users.length > 0 ? this.props.users.map(user => <MentorCard user={user} />): null}
=======
      <div className="ui cards">
        {this.props.users.map(user => <MentorCard user={user} />)}
>>>>>>> 797731dfb3e92954bbeafdfe7638604e02a431c6
      </div>
    )
  }

}

export default CardContainer
