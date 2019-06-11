import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SecondBanner from './Components/SecondBanner/SecondBanner';
import ThirdBanner from './Components/ThirdBanner/ThirdBanner';
import FourBanner from './Components/FourBanner/FourBanner';
import FiveBanner from './Components/FiveBanner/FiveBanner';
import SixBanner from './Components/SixBanner/SixBanner';
import Footer from './Components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <SecondBanner data={"I am umer"}/>
        <ThirdBanner/>
        <FourBanner/>
        <FiveBanner/>
        <SixBanner/>
        <Footer/>
      </div>
    );
  }
}


export default App;
