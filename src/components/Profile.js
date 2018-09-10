import React from "react"
import {Link} from 'react-router-dom'

const Profile = (props) => {



  if (props.user) {

    const user = props.findUserById(props.user.id)
    debugger
  return (
    <div className="ui segment">
      <div className="ui top attached label">My Profile</div>
        <p><b>Name:</b> {user.name}</p>
        {user.user_skills && user.user_skills.length > 0 ? <p><b>Skills:</b>
          <ul>
          {user.user_skills.map(us => <li>{us.skill.name} ({us.number_of_years_experience} years experience)</li>)}
          </ul>
          </p> : null}
        <p><b>Job Title:</b> {user.job_title}</p>
        <p><b>Location:</b> {user.location}</p>
        <p><b>Bio:</b> {user.bio}</p>

      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui active basic blue button' onClick={() => this.props.addMentor(user.id)}>Add Skill</div>
          <Link to="/mentors" className='ui basic black button'>Back To All Mentors</Link>
        </div>
      </div>
    </div>
  )} else {
    return null
  }
}

export default Profile
