import React from "react";
import {connect} from 'react-redux';
import {addLook} from "../actions/addLook";

class LookForm extends React.Component {
 state = {
  title: '', 
  note:'', 
  date: ''
}

handleChange = (event) => {
 this.setState({
    [event.target.name]: event.target.value
 })
}

handleSubmit = (event) => {
  event.preventDefault()
  this.props.addLook(this.state)
  this.setState({
    title: "",
    note: "",
    date: ""
  });
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Look Title:</label>
          <input type="text" placeholder="title" value={this.state.title} name="title" onChange={this.handleChange} /><br/>
          <label>Notes:</label>
          <input type="text" placeholder="notes" value={this.state.note} name="note" onChange={this.handleChange} /><br/>
          <label>Date:</label>
          <input type="text" placeholder="date" value={this.state.date} name="date" onChange={this.handleChange}/><br/>
          <input type='submit'/>
        </form>
      </div>
    );
    
  }
}
export default connect(null, {addLook})(LookForm);

//when you dont use a mapstatetoprops you enter null this component does not need access to whats in the redux store its responsible for sending something to backend and store
//directly import file since we have thunk setup


//local state holding form values 