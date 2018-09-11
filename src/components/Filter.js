import React from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'

class Filter extends React.Component {
  constructor(){
    super()
    this.state={
      skills: [],
      filter: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/skills')
    .then(res => res.json())
    .then(json => this.setState({
      skills: json
    }))
  }

  changeHandler=(val)=>{
    this.setState({
      filter: val
    })
  }

  submitHandler=(e) => {
    e.preventDefault()
    this.props.filterFunction(this.state.filter)
  }

  render() {
    let skillsArr = this.state.skills.length > 0 ?  [...this.state.skills.map(skill=>({text: skill.name, value: skill.id})), {text: "No Filter", value: "No Filter"}] : null
    return (
      <Form onSubmit={this.submitHandler}>
      <div className="ui form field">
        <label htmlFor="skill_id">Filter List By Skill</label>
        <Dropdown onChange={(e)=>this.changeHandler(e.target.innerText)} placeholder='Select Skill' fluid selection options= {skillsArr}/>
      </div>
        <Button id="filter-button" type= 'submit'>Filter</Button>
      </Form>

    )
  }
}

export default Filter
