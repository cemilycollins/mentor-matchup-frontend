import React from 'react'
import { Dropdown } from 'semantic-ui-react'

class CreateUserForm extends React.Component{



  constructor(){
    super()
    this.state={
      name: '',
      email: '',
      password: '',
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
      this.setState({
        key: val
      })
    }


  render(){
    return(
      <div style={{padding: '10%', width: '75%', margin: 'auto'}}>

        <form className="ui form">
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
          <Dropdown placeholder='Pick one' fluid selection options={this.arr}/>

          <button className="ui blue button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default CreateUserForm

// <div className="field">
//   <label>Mentor or Mentee?</label>
//   <div className="ui selection dropdown">
//     <input type="hidden" name="type_of"/>
//     <i className="dropdown icon"></i>
//       <div className="default text">Type</div>
//         <div className="menu">
//         <div className="item" data-value="1">Mentor</div>
//         <div className="item" data-value="0">Mentee</div>
//       </div>
//     </div>
//   </div>
