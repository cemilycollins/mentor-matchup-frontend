import React from 'react'

class MentorCard extends React.Component {
  render () {
    const {user} = this.props
    return (
      <div className='card'>
        <div className='content'>
          <div className='header' id='name'>{user.name}</div>
          <div className='meta'>{user.title}</div>
          <div className='description'>
            <b>Location: ${user.location}</b>
            <p id='relevant-info'>${user.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MentorCard
