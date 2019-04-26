import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import '../App.css';

export default class SearchButton extends Component {
  render() {
    return (
      <div className = "search_button">
        <Fab color="primary" aria-label="Search" onClick = {this.props.onClick}>
        <SearchIcon/>
        </Fab>
      </div>
    )
  }
}
