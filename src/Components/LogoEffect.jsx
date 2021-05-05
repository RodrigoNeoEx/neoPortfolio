import React, { Component } from 'react';
import '../Style/Logo.css'

class LogoEffect extends Component {
  render() {
    return (
      <p className="glitchLogo">
        <span aria-hidden="true">N</span>
        N
        <span aria-hidden="true">N</span>
      </p>
    )
  }
}

export default LogoEffect;
