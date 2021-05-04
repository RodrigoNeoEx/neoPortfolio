import React, { Component } from 'react';
import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiCodepen,
  SiLinkedin,
  SiGithub
} from "react-icons/si";
import { BiPhoneIncoming } from "react-icons/bi";
import '../Style/Footer.css';

class Footer extends Component {
render() {
  return(
    <div id="contact" className="footerContainer">
        <p className="name">Developed by Rodrigo Camargo Pereira</p>
        <p className="phone"><BiPhoneIncoming /> +55 13 99116 4296 </p>
        <p className="language">Made with: <SiReact /> <SiJavascript /> <SiCss3 /></p>
        <p className="contact">Contact:
          <a href="https://github.com/RodrigoNeoEx"> <SiGithub /> </a>
          <a href="https://www.linkedin.com/in/rodrigo-camargo-7421261b2/"> <SiLinkedin /> </a>
          <a href="https://codepen.io/rodrigoneoex"> <SiCodepen /> </a>
        </p>
    </div>
  )};
}

export default Footer;
