import React, { Component } from 'react';
import '../Style/LogoEffect.css'

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
