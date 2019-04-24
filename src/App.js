import React, { Component } from 'react';
import './App.css';
import get_data from './controller/get_data';
import { create_url , get_access_token } from './controller/process_url';
import check_url from './controller/check_url';
import {authorization_url} from './config/Url';
import authorization_params from './config/Params';
import SearchButton from './sub_components/Search_button';
import SearchBar from './sub_components/Search_bar';
import ResultCard from './sub_components/Result_card';

let access_token;

function test(){
  console.log(create_url(authorization_url,authorization_params).href);
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFetch: false,
    }
  }

  componentDidMount(){
    if(check_url(window.location.href))
    {
      access_token = get_access_token();
      this.setState({isFetch:true});
    }
  }
  render() {
    test();
    return (
      <ResultCard/>
    );
  }
}

export default App;
