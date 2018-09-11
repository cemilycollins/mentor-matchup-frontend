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
            {user.user_skills.length > 0 ? <div><b>Skills:</b>
              <ul>
              {user.user_skills.map(us => <li>{us.skill.name} ({us.number_of_years_experience} years experience)}</li>)}
              </ul>
            </div> : null}
            <p><b>Job Title:</b> {user.job_title}</p>
            <p><b>Location:</b> {user.location}</p>
            <p><b>Bio:</b> {user.bio}</p>

          <div className='extra content'>
            <div className='ui two buttons'>
              <button className='ui active basic blue button' onClick={() => this.props.addMentor(user.id)}>Request This Mentor</button>
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
