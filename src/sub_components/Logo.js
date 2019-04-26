import React, { Component } from 'react'
import spotify_icon from '../images/spotify.png';
import '../App.css';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <img src = {spotify_icon} className = "logo"/>
      </div>
    )
  }
}
