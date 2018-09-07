import React from 'react'
import {Link} from 'react-router-dom'

class MentorCard extends React.Component {
  render () {
    const {user} = this.props
    return (
      <Link to={`/${user.type_of}s/${user.id}`} className='card'>
        <div className='content'>
          <div className='header' id='name'>{user.name}</div>
          <div className='meta'>{user.title}</div>
          <div className='description'>
            <b>Location: ${user.location}</b>
            <p id='relevant-info'>${user.description}</p>
          </div>
        </div>
      </Link>
    )
  }
}

export default MentorCard
