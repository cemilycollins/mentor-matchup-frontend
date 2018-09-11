import React from "react"
import MatchCard from "../components/MatchCard"

const MatchContainer = (props) => {
  if (props.user) {
  const user = props.findUserById(props.user.id)
  return (
    <div className="ui segment">
      <div className="ui top attached label">My Matches</div>
      <div className="ui cards">
      {user.mentor_matches.length > 0 ? user.mentor_matches.map(match => (
        <MatchCard match={props.findUserById(match.mentor_id)}/>)) : null
      }
      {user.mentee_matches.length > 0 ? user.mentee_matches.map(match => (
        <MatchCard match={props.findUserById(match.mentee_id)}/>)) : null
      }
      </div>
    </div>
  )} else {
    return null
  }
}

export default MatchContainer
