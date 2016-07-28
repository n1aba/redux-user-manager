import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './user.js'
import { mapStateToProps, mapDispatchToProps } from './mapDispatchAndState.js'
import './css/userList.css'

class UserList extends Component {
  render () {
    var input = this.props.stateFromReducer.filterString;
    var users = this.props.users.filter((userone, id) => {
      return (!!(userone.name.toLowerCase().indexOf(input) + 1))
    })
    .map((userone, id) => {
      return (
        <User key={id} userone={userone} id={userone.id} deleteUser={this.props.deleteUser}/>
      );
    });
    return (
      <ul className="user-list">{users}</ul>
    );
  }
}

const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListConnected;
