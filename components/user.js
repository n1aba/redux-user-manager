import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './mapDispatchAndState.js'
import './css/user.css'

class User extends Component {
  constructor(props) {
    super(props);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  onClickDelete() {
    this.props.deleteUser(this.props.id);
  }

  render () {
    return(
      <li className="li-user">
        <div className="div-user">
          {this.props.userone.name}
          <button type="button" className="delete-btn" onClick={this.onClickDelete}>Delete</button>
        </div>
      </li>
    );
  }
}

const UserConnected = connect(mapStateToProps, mapDispatchToProps)(User);
export default UserConnected;
