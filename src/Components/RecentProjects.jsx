import React, { Component } from 'react'
import { SiRedux, SiReact, SiJavascript, SiCss3, SiGithub } from "react-icons/si";
import '../Style/RecentProjects.css'
import ReactPlayer from 'react-player/lazy'
import trivia from '../Videos/trivia.mp4'
import wallet from '../Videos/wallet.mp4'

class RecentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: '',
    }
    this.createVideoPlayer = this.createVideoPlayer.bind(this);
  }

  createVideoPlayer(video) {
    this.setState({videos: video})
  }

  render() {
    const { videos } = this.state;
    console.log(this.props)
    return(
      <div className="recentContainer">
        <div className="triviaBorder"></div>
        <div className="trivia">
        <button
          type='button'
          onClick={ () => this.createVideoPlayer(trivia) }
          className="playTrivia"
        >
          Watch Video
        </button>
        <div className="projectTitle">Trivia</div>
          <div>
            <SiRedux className="redux" />
            <SiReact className="react" />
            <SiJavascript className="js"/>
            <SiCss3 className="css"/>
          </div>
          <a href="./"><SiGithub /> Code <SiGithub /></a>
        </div>
        <div className="walletBorder"></div>
        <div className="wallet">
        <button
          type='button'
          onClick={ () => this.createVideoPlayer(wallet) }
          className="playWallet"
        >
          Watch Video
        </button>
          <div className="projectTitle">Wallet</div>
          <div>
            <SiRedux className="redux" />
            <SiReact className="react" />
            <SiJavascript className="js" />
            <SiCss3 className="css"/>
          </div>
          <a href="./"><SiGithub /> Code <SiGithub /></a>
        </div>
        <div className="borderBot">
          <div className="borderTop">
          </div>
        </div>
        <ReactPlayer className="videoPlayer" url={videos} playing loop width='95' height='' />
        <div className="starWarsBorder"></div>
        <div className="starWars">
        <button
          type='button'
          onClick={ () => this.createVideoPlayer(wallet) }
          className="playStar"
        >
          Watch Video
        </button>
          <div className="projectTitle">StarWars</div>
          <div>
            <SiReact className="react" />
            <SiJavascript className="js" />
            <SiCss3 className="css"/>
          </div>
          <a href="./"><SiGithub /> Code <SiGithub /></a>
        </div>
        <div className="appRecipesBorder"></div>
        <div className="appRecipes">
        <button
          type='button'
          onClick={ () => this.createVideoPlayer(wallet) }
          className="playApp"
        >
          Watch Video
        </button>
          <div className="projectTitle">Recipes App</div>
          <div>
            <SiRedux className="redux" />
            <SiReact className="react" />
            <SiJavascript className="js" />
            <SiCss3 className="css" />
          </div>
          <a href="./" className="code"><SiGithub /> Code <SiGithub /></a>
        </div>
      </div>
    )
  }
}

export default RecentProjects;
