import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './mapDispatchAndState.js'
import './css/userForm.css'

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.onHitSubmit = this.onHitSubmit.bind(this);
  }

  onHitSubmit(event) {
    event.preventDefault();
    var newUserName = this.refs.userName.value;
    if(newUserName) {
      this.props.addNewUser(newUserName);
      this.refs.form.reset();
    }
  }

  render () {
    return (
      <form ref="form" onSubmit={this.onHitSubmit}>
        <input type="text" ref="userName" onChange={() => {
           this.props.filter(this.refs.userName.value.toLowerCase());
         }} placeholder="add user or filter existing..."/>
        <button type="submit" className="add-btn">Add</button>
      </form>
    );
  }
}

const UserFormConnected = connect(mapStateToProps, mapDispatchToProps)(UserForm);
export default UserFormConnected;
