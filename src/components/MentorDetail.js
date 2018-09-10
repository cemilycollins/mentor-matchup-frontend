import React from 'react'
import {Link} from 'react-router-dom'

class MentorDetail extends React.Component {

  render() {
    const {user} = this.props
    if (user) {
      return (
        <div className="ui segment">
          <div className="ui top attached label">Mentor Details</div>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Skills:</b> {user.skills.map(skill => skill.name).join(", ")}</p>
            <p><b>Job Title:</b> {user.job_title}</p>
            <p><b>Location:</b> {user.location}</p>
            <p><b>Bio:</b> {user.bio}</p>

          <div className='extra content'>
            <div className='ui two buttons'>
              <div className='ui active basic blue button'>Request This Mentor</div>
              <Link to="/mentors" className='ui basic black button'>Back To All Mentors</Link>
            </div>
          </div>
        </div>
      )
    } else {
      return null
    }

  }
}

export default MentorDetail
