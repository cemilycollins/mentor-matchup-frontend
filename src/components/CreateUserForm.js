import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class CreateUserForm extends React.Component{



  constructor(){
    super()
    this.state={
      name: '',
      email: '',
      password_digest: '',
      job_title: '',
      bio: '',
      type_of: '',
      location: ''
    }
  }

   arr = [
    {
    text: 'Mentor',
    value: 'mentor'
  },
  {
    text: 'Mentee',
    value: 'mentee'
  }
  ]

    changeHandler=(val, key)=>{
      if(key === 'type_of'){
        val = val.innerText.toLowerCase()
      }
      this.setState({
        [key]: val
      })
    }

    addToDB=(e)=>{
      e.preventDefault()
      fetch('http://localhost:3000/users/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password_digest: this.state.password,
          job_title: this.state.job_title,
          bio: this.state.bio,
          type_of: this.state.type_of,
          location: this.state.location
        })
      })
      .then(res=> res.json())
      .then(json=> console.log(json))
      // add route for detail page
    }


  render(){
    return(
      <div style={{padding: '10%', width: '75%', margin: 'auto'}}>

        <form onSubmit={this.addToDB} className="ui form">
          <div className="ui form field">
            <label htmlFor="email">Email</label>
            <input onChange={(e)=>this.changeHandler(e.target.value,'email')} type="text" name="email" placeholder="Email" />
          </div>
          <div className="ui form field">
            <label htmlFor="password">Password</label>
            <input onChange={(e)=>this.changeHandler(e.target.value,'password')} type="password" name="password" placeholder="Password" />
          </div>
          <div className="ui form field">
            <label htmlFor="name">Name</label>
            <input onChange={(e)=>this.changeHandler(e.target.value,'name')} type="text" name="name" placeholder="Name" />
          </div>
          <div className="ui form field">
            <label htmlFor="job_title">Job Title</label>
            <input onChange={(e)=>this.changeHandler(e.target.value,'job_title')} type="text" name="job_title" placeholder="Job Title" />
          </div>
          <div className="ui form field">
            <label htmlFor="location">Location</label>
            <input onChange={(e)=>this.changeHandler(e.target.value,'location')} type="text" name="location" placeholder="Location" />
          </div>
          <div className="ui form field">
            <label htmlFor="bio">Bio</label>
            <textarea onChange={(e)=>this.changeHandler(e.target.value,'bio')}  name="bio" placeholder="Tell us about yourself..." />
          </div>
          <Dropdown onChange={(e)=>this.changeHandler(e.target,'type_of')} placeholder='Pick one' fluid selection options={this.arr}/>

          <button className="ui blue button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default CreateUserForm
