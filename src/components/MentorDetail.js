import React from 'react'

class MentorDetail extends React.Component {
  render() {
    console.log(this.props.user)
    const {user} = this.props
    return (
      <div className="ui segment">
        <div className="ui top attached label">Mentor detail</div>
        <p><b>Name:</b> {this.props.user.name}</p>


        <div className='extra content'>
          <div className='ui two buttons'>
            <div className='ui active basic blue button'>Request This Mentor</div>
            <div className='ui basic black button'>Back To All Mentors</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MentorDetail
