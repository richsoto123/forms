import React, {Component} from 'react';

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
  }  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
    console.log(event.target.name);
  }  
  handleSubmit = (event) => {
    // event.preventDefault(); // this is stop propagation
    alert(`an input was submitted: UserName: ${this.state.username} Password: ${this.state.password}`)
  }  
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          User Name:
          <input name="username" onChange={this.handleChange} value={this.state.username} type="text" placeholder="Enter your name here" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" />
      </form>
    )
  };
};export default Forms;
