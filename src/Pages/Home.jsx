import React, { Component } from 'react';
import Header from '../Components/Header'
import FirstPage from '../Components/FirstPage';
import SecondPage from '../Components/SecondPage';
import ThirdPage from '../Components/ThirdPage';
import PageBreak from '../Components/PageBreak';
import '../Style/HomePageUm.css'
import '../Style/HomePageDois.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <FirstPage />
        <PageBreak />
        <SecondPage />
        <PageBreak />
        <ThirdPage />
      </>
    )
  }
}

export default Home;
