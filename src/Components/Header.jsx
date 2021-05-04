import React, { Component } from 'react'
import '../Style/Header.css'

class Header extends Component {
  render() {
    return(
      <div className="header">
        <logo className="logo">N</logo>
        <nav className="nav">
          <a href="#Hello">Home</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/RodrigoNeoEx?tab=repositories">All Projects</a>
        </nav>
      </div>
    )
  }
}

export default Header;
