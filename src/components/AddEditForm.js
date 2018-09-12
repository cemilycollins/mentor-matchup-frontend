
import React from 'react'
import {Dropdown} from 'semantic-ui-react'

export default class AddEditForm extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state={
      name: this.props.user.name,
      email: this.props.user.email,
      job_title: this.props.user.job_title,
      bio: this.props.user.bio,
      location: this.props.user.location
    }
  }

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
      fetch(`http://localhost:3000/users/${this.props.user.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json',
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          job_title: this.state.job_title,
          bio: this.state.bio,
          location: this.state.location
        })
      })
      .then(res=> res.json())
      .then(json=>{
        this.props.editFormHand()
        this.props.fetchUsers()
      })
    }


  render(){
    return(
      <div style={{padding: '10%', width: '75%', margin: 'auto'}}>

        <form onSubmit={this.addToDB} className="ui form">
          <div className="ui form field">
            <label htmlFor="email">Email</label>
            <input value={this.state.email} onChange={(e)=>this.changeHandler(e.target.value,'email')} type="text" name="email" placeholder="Email" />
          </div>
          <div className="ui form field">
            <label htmlFor="name">Name</label>
            <input value={this.state.name} onChange={(e)=>this.changeHandler(e.target.value,'name')} type="text" name="name" placeholder="Name" />
          </div>
          <div className="ui form field">
            <label htmlFor="job_title">Job Title</label>
            <input value={this.state.job_title} onChange={(e)=>this.changeHandler(e.target.value,'job_title')} type="text" name="job_title" placeholder="Job Title" />
          </div>
          <div className="ui form field">
            <label htmlFor="location">Location</label>
            <input value= {this.state.location} onChange={(e)=>this.changeHandler(e.target.value,'location')} type="text" name="location" placeholder="Location" />
          </div>
          <div className="ui form field">
            <label htmlFor="bio">Bio</label>
            <textarea value= {this.state.bio} onChange={(e)=>this.changeHandler(e.target.value,'bio')}  name="bio" placeholder="Tell us about yourself..." />
          </div>

          <button to="/login" className="ui blue button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
