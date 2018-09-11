import React from "react"
import MatchCard from "../components/MatchCard"

const MatchContainer = (props) => {
  if (props.user && props.findUserById(props.user.id)) {
  const user = props.findUserById(props.user.id)
  return (
    <div className="ui segment">
      <div className="ui top attached label">My Matches</div>
      <div className="ui cards">
      {user.mentor_matches && user.mentor_matches.length > 0 ? user.mentor_matches.map(match => (
        <MatchCard match={props.findUserById(match.mentor_id)} deleteMatch={() => props.deleteMatch(match.id)}/>)) : null
      }
      {user.mentee_matches && user.mentee_matches.length > 0 ? user.mentee_matches.map(match => (
        <MatchCard match={props.findUserById(match.mentee_id)} deleteMatch={() => props.deleteMatch(match.id)}/>)) : null
      }
      </div>
    </div>
  )} else {
    return null
  }
}

export default MatchContainer
