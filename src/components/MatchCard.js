import React from 'react'

const MatchCard = (props) => {
  if (props.match) {
  let user = props.match
  return (
    <div className='card'>
    <div className='content'>
      <div className='header' id='name'>{user.name}</div>
      <div className='meta'>{user.title}</div>
      <div className='description'>
        <p><b>Location:</b> {user.location}</p>
        <p><b>Bio:</b> {user.bio}</p>
        {user.user_skills.length > 0 ? <div><b>Skills:</b>
          <ul>
          {user.user_skills.map(us => <li>{us.skill.name} ({us.number_of_years_experience} years experience)</li>)}
          </ul>
        </div> : null}
        <h3>Contact Info:</h3>
        <p><b>Email:</b> {user.email}</p>


      </div>
      <div className='extra content'>
        <div className='ui one button'>
          <div className='ui active basic red button' onClick={props.deleteMatch}>Delete This Match</div>
        </div>
      </div>
    </div>
  </div>
)} else {
  return null
}

}

export default MatchCard
