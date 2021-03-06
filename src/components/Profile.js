import React from "react"
import {Link} from 'react-router-dom'
import AddSkillForm from './addSkillForm'
import AddEditForm from './AddEditForm'


export default class Profile extends React.Component{
  constructor(){
    super()
    this.state={
      clickedSkill: false,
      clickedEdit: false
    }
  }

  clickHandler=()=>{
    let status = !this.state.clickedSkill
    if(this.state.clickedEdit === true){
      this.setState({clickedEdit: false})
    }
    this.setState({
      clickedSkill: status
    })
  }

  deleteHandler=(id)=>{
    fetch(`http://localhost:3000/user_skills/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer${localStorage.getItem('token')}`
      }
    }).then(r => r.json())
    .then(json=>{
      console.log(json)
      this.props.fetchUsers()
    })
  }

  editFormClick=()=>{
    let status = !this.state.clickedEdit
    if(this.state.clickedSkill === true){
      this.setState({clickedSkill: false})
    }
    this.setState({
    clickedEdit: status
   })
  }

  render(){
    const skillForm = this.state.clickedSkill ? <AddSkillForm clickHand={this.clickHandler} fetchUsers={this.props.fetchUsers} user={this.props.user}/> : null
    const editForm = this.state.clickedEdit ? <AddEditForm editFormHand={this.editFormClick} fetchUsers={this.props.fetchUsers} user={this.props.findUserById(this.props.user.id)}/> : null


  if (this.props.user && this.props.findUserById(this.props.user.id)) {
    const user = this.props.findUserById(this.props.user.id)
  return (
    <div className="ui segment">
      <div className="ui top attached label">My Profile</div>
        <p><b>Name:</b> {user.name}</p>
        {user.user_skills && user.user_skills.length > 0 ? <div><b>Skills:</b>
          <ul>
          {user.user_skills.map(us => <li>{us.skill.name} ({us.number_of_years_experience} years experience)<button onClick={()=> this.deleteHandler(us.id)} className='delete_button'>x</button></li>)}
          </ul>
          </div> : null}
        <p><b>Job Title:</b> {user.job_title}</p>
        <p><b>Location:</b> {user.location}</p>
        <p><b>Bio:</b> {user.bio}</p>
      <div className='extra content'>
        <div className='ui three buttons'>
          <button className='ui active basic blue button' onClick={this.clickHandler}>Add Skill</button>
          {user.type_of === "mentee" ? <Link to="/mentors" className='ui basic black button'>Back To All Mentors</Link> : <Link to="/mentees" className='ui basic black button'>Back To All Mentees</Link>}
          <button  color= 'blue' className= 'ui basic purple button' onClick={this.editFormClick}>Edit Details</button>
        </div>
        {skillForm}
        {editForm}
      </div>
    </div>
  )} else {
    return null
  }
}
}
