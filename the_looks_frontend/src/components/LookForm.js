import React from "react";
import {connect} from 'react-redux';
import {addLook} from "../actions/addLook";
// import Products from '/Products'
// import styled from 'styled-components'
import {StyledButton, Label, StyledForm,  StyledInput} from './FormComponents'
import { Redirect } from "react-router-dom";



class LookForm extends React.Component {
 state = {
   redirect: null,
    title: '', 
    note:'', 
    
 
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
    redirect: '/looks',
    title: "",
    note: "",
   
  
  });
}

  render() {
    if (this.state.redirect) {
       return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
    
          <StyledForm onSubmit={this.handleSubmit}>
              <Label>Title:</Label>
              <StyledInput
                type="text"
                placeholder="title"
                value={this.state.title}
                name="title"
                onChange={this.handleChange}
              />
              <br />
              <Label>Notes:</Label>
              <StyledInput
                type="text"
                placeholder="notes"
                value={this.state.note}
                name="note"
                onChange={this.handleChange}
              />
              {/* <br />
              <Label>Date:</Label>
              <StyledInput
                type="text"
                placeholder="date"
                value={this.state.date}
                name="date"
                onChange={this.handleChange}
              />
              <br /> */}
              {/* <input type='submit'/> */}

              <StyledButton>create Look</StyledButton>
           
          </StyledForm>
       
      </div>
    );
    
  }
}
export default connect(null, {addLook})(LookForm);

//when you dont use a mapstatetoprops you enter null this component does not need access to whats in the redux store its responsible for sending something to backend and store
//directly import file since we have thunk setup


//local state holding form values 