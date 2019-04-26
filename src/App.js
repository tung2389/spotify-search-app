import React, { Component } from 'react';
import './App.css';

import get_data from './controller/get_data';
import { create_url , get_access_token } from './controller/process_url';
import check_url from './controller/check_url';
import return_data from './controller/return_data';

import {authorization_url} from './config/Url';
import authorization_params from './config/Params';

import SearchButton from './sub_components/Search_button';
import SearchBar from './sub_components/Search_bar';
import ResultCard from './sub_components/Result_card';
import ResultContainer from './sub_components/Result_container';
import Logo from './sub_components/Logo';
import LoginButton from './sub_components/Login_button';

let access_token;


function login(){
  window.location.href = create_url(authorization_url,authorization_params).href;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search_input: "",
      isLogin: false,
      search_result: undefined
    }
    this.main_component = this.main_component.bind(this);
    this.handle_change = this.handle_change.bind(this);
    this.handle_fetch = this.handle_fetch.bind(this);
  }

  async componentDidMount(){
    if(check_url(window.location.href))
    {
      access_token = get_access_token();
      this.setState({isLogin:true});
    }
  }

  main_component(){
    if(this.state.search_result !== undefined){
      return (
        <div>
        {this.state.search_result}
        </div>
      );
    }
    else{
      return <div></div>
    }
  }

  async handle_fetch(){
    if(!this.state.isLogin) {
      alert("You must login first to use this app");
    }
    if(!this.state.search_input){
      alert("Plese enter your key word");
    }
    else {
    let all_data = await get_data(this.state.search_input, access_token);
    let all_jsx = await return_data(all_data);
    this.setState({search_result: all_jsx});
    }
  }
  
  handle_change(search_input){
    this.setState({search_input: search_input});
  }

  render() {
    return (
      <div>
      <Logo/>
      <SearchBar onChange = {this.handle_change}/>
      <SearchButton onClick = {this.handle_fetch}/>
      <LoginButton onClick = {login}/>
      {this.main_component()}
      </div>
    );
  }
}

export default App;
