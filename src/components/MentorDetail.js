import React from 'react'

class MentorDetail extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui top attached label">Mentor detail</div>

        <div className='extra content'>
          <div className='ui two buttons'>
            <div className='ui basic blue button'>Request This Mentor</div>
            <div className='ui basic button'>Back To All Mentors</div>
          </div>
        </div>
      </div>
    )
  }
}

export default MentorDetail
