import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import '../App.css';

export default class LoginButton extends Component {
  render() {
    return (
      <div className = "login_button">
        <Button color = "primary" variant = "contained" onClick = {this.props.onClick}>Login</Button>
      </div>
    )
  }
}
