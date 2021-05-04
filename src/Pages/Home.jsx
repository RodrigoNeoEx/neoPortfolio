import React, { Component } from 'react';
import Header from '../Components/Header'
import FirstPage from '../Components/FirstPage';
import SecondPage from '../Components/SecondPage';
import ThirdPage from '../Components/ThirdPage';
import PageBreak from '../Components/PageBreaker';
import '../Style/FirstPage.css'
import '../Style/SecondPage.css'

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
