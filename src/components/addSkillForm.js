import React from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'
export default class addSkillForm extends React.Component{
  constructor(){
    super()
    this.state={
      skills: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/skills')
    .then(res => res.json())
    .then(json => this.setState({
      skills: json
    }))
  }
  let skillsArr = this.state.skills.map(skill=>{name: skill.name, value: skill.id})



  return(
    <Form>
    <div className="ui form field">
      <label htmlFor="Skill">Skill</label>
      <Dropdown placeholder= 'Select Skill' fluid selection options= {skillsArr}/>
    </div>
    <div className="ui form field">
      <label htmlFor="years">Skills Experience</label>
      <input type="text" name="years" placeholder="Years Experience with Skill" />
    </div>
      <Button></Button>
    </Form>
  )
}
