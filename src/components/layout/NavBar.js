import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './pokemon-logo.png';



export default class NavBar extends Component {
  render() {
    return (
      <div>
       <nav class="navbar navbar-dark bg-dark fixed-top">
  <a class="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" href="">
    <img src={logo} alt="Pokemon" className="col-sm-10 col-md-5"/>
  </a>
</nav>
      </div>
    )
  }
}
