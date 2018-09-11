import React from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'
export default class AddSkillForm extends React.Component{
  constructor(){
    super()
    this.state={
      skills: [],
      skills_years: 0,
      skill_id: ''

    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/skills')
    .then(res => res.json())
    .then(json => this.setState({
      skills: json
    }))
  }

  submitHandler=(event)=>{
    fetch('http://localhost:3000/user_skills', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        skill_id: parseInt(this.state.skill_id),
        user_id: parseInt(this.props.user.id),
        number_of_years_experience: parseInt(this.state.skills_years)
      })
    }).then(r => r.json())
    .then(json=>{
      console.log(json)
      this.props.fetchUsers()
    })
  }

  changeHandler=(val, key)=>{
    let id;
    if(key === 'skill_id'){
      id = this.state.skills.filter(skill=>skill.name === val)[0].id
      val = id
    }
    this.setState({
      [key]: val
    })
  }


  render(){
    let skillsArr = this.state.skills.length > 0 ? this.state.skills.map(skill=>({text: skill.name, value: skill.id})) : null
  return(
    <Form onSubmit={this.submitHandler}>
    <div className="ui form field">
      <label htmlFor="skill_id">Skill</label>
      <Dropdown onChange={(e)=>this.changeHandler(e.target.innerText,'skill_id')} placeholder= 'Select Skill' fluid selection options= {skillsArr}/>
    </div>
    <div className="ui form field">
      <label htmlFor="skills_years">Skills Experience</label>
      <input onChange={(e)=>this.changeHandler(e.target.value,'skills_years')} type="text" name="number_of_years_experience" placeholder="Years Experience with Skill" />
    </div>
      <Button  type= 'submit'>Submit</Button>
    </Form>
  )
}
}
