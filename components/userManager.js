import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserForm from './userForm.js'
import UserList from './userList.js'
import { mapStateToProps, mapDispatchToProps } from './mapDispatchAndState.js'
import './css/userManager.css'

class UserManager extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { users } = this.props.stateFromReducer;
    return (
      <div id="user-manager">
        <UserForm addUser={this.addUser}/>
        <UserList users={users} deleteUser={this.deleteUser}/>
      </div>
    );
  }
}

const UserManagerConnected = connect(mapStateToProps, mapDispatchToProps)(UserManager);
export default UserManagerConnected;
