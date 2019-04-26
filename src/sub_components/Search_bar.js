import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import '../App.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className = "search_bar">
        <TextField className = "input" onChange = {(e) => this.props.onChange(e.target.value)}/>
      </div>
    )
  }
}
