import React, { Component } from 'react'
import { SiRedux, SiReact, SiJavascript, SiCss3, SiGithub } from "react-icons/si";
import '../Style/RecentProjects.css'
import ReactPlayer from 'react-player/lazy'
import trivia from '../Videos/trivia.mp4'
import wallet from '../Videos/wallet.mp4'
import nmovies from '../Videos/NMovies.mp4'
import recipesApp from '../Videos/recipesApp.mp4'

class RecentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: '',
    }
    this.createVideoPlayer = this.createVideoPlayer.bind(this);
    this.renderUsedLanguages = this.renderUsedLanguages.bind(this);
  }

  createVideoPlayer(video) {
    this.setState({videos: video})
  }

  renderUsedLanguages() {
    const { videos } = this.state;
    if(videos.includes('trivia')) {
      return (
      <div className="languages">
        <p>
          Languages used:
          <SiRedux className="redux" />
          <SiReact className="react" />
          <SiJavascript className="js"/>
          <SiCss3 className="css"/>
        </p>
      </div>
      );
    }
    if(videos.includes('wallet')) {
      return (
        <div className="languages">
          <p>
            Languages used:
            <SiRedux className="redux" />
            <SiReact className="react" />
            <SiJavascript className="js"/>
            <SiCss3 className="css"/>
          </p>
        </div>
        );
    }
    if(videos.includes('NMovies')) {
      return (
        <div className="languages">
        <p>
          Languages used:
          <SiReact className="react" />
          <SiJavascript className="js" />
          <SiCss3 className="css"/>
        </p>
        </div>
      );
    }
    if(videos.includes('recipesApp')) {
      return (
        <div className="languages">
          <p>
            Languages used:
            <SiRedux className="redux" />
            <SiReact className="react" />
            <SiJavascript className="js"/>
            <SiCss3 className="css"/>
          </p>
        </div>
        );
    }
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
          <a href="./"><SiGithub /> Code <SiGithub /></a>
        </div>
        <div className="borderBot">
          <div className="borderTop">
          </div>
        </div>
        <ReactPlayer className="videoPlayer" url={videos} playing loop width='95' height='' />
        <div>{ this.renderUsedLanguages() }</div>
        <div className="starWarsBorder"></div>
        <div className="starWars">
        <button
          type='button'
          onClick={ () => this.createVideoPlayer(nmovies) }
          className="playStar"
        >
          Watch Video
        </button>
          <div className="projectTitle">N Movies</div>
          <a href="./"><SiGithub /> Code <SiGithub /></a>
        </div>
        <div className="appRecipesBorder"></div>
        <div className="appRecipes">
        <button
          type='button'
          onClick={ () => this.createVideoPlayer(recipesApp) }
          className="playApp"
        >
          Watch Video
        </button>
          <div className="projectTitle">Recipes App</div>
          <a href="./" className="code"><SiGithub /> Code <SiGithub /></a>
        </div>
      </div>
    )
  }
}

export default RecentProjects;
