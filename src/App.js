import React, { Component } from 'react';
import './App.css';
import {send_fetch_request, get_data} from './controller/get_data';
import { create_url , get_access_token } from './controller/process_url';
import check_url from './controller/check_url';
import {authorization_url} from './config/Url';
import authorization_params from './config/Params';



function test(){
  console.log(create_url(authorization_url,authorization_params).href);
}


class App extends Component {
  componentDidMount(){
    if(check_url(window.location.href))
    {
      console.log(get_access_token());
    }
  }
  render() {
    test();
    return (
      <div>Hello</div>
    );
  }
}

export default App;
