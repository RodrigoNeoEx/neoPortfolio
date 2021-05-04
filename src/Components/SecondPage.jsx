import React, { Component } from 'react';
import RecentProjects from './RecentProjects'
import '../Style/SecondPage.css';
import '../Style/RecentProjects.css'

class SecondPage extends Component {
  render() {
    return(
      <div className="SecondPage">
        <div className="secText">
          <span className="fline">Most Recent</span>
          <span className="sline">Works</span></div>
        <div className="projects">
          <RecentProjects />
        </div>
    </div>
  )};
}

  export default SecondPage;
