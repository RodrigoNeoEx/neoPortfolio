import React, { Component } from 'react';
import Calendar from './Calendar';
import '../Style/FirstPage.css';

class FirstPage extends Component {
render() {
  return(
  <div id="Hello" className="firstPage">
    <div className="hero">
      <div  className="helloContainer">
        <div className="hello">Hello!!!</div>
        <div className="name">I'm Rodrigo "NeoEx"</div>
      </div>
      <div className="cargo">FrontEnd Web Developer</div>
      <Calendar />
      <div className="description"></div>
      <p className="text">Completely in love with effects, design and all dynamics related to the front end. <br></br>This is me!<br></br>Currently studying Full Stack Web Development at Trybe and looking for new challenges/jobs in the WebDev market</p>
    </div>
  </div>
  )};
}

export default FirstPage;
