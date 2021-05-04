import React, { Component } from 'react';
import Footer from './Footer';
import GlitchLogo from './GlitchLogo'
import '../Style/ThirdPage.css';


class ThirdPage extends Component {
  render() {
    return(
      <div className="thirdPage">
        <div className="textContainer">
          <span className="first">Let's talk</span>
          <span className="second">about</span>
          <span className="third">your</span>
          <span className="fourth">ideas?</span>
          <span className="fifth">Contact me!!!</span>
        </div>
        <GlitchLogo />
        <Footer />
      </div>
    )};
  }

export default ThirdPage;
