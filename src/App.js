import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import { BrowserRouter, Routes, Route } from "react-router-dom"

export default class App extends Component {

  render() {
    return (
      <>
        
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<News key="general" pageSize={6} country="in" category="general" newsTitle="Today's Top News" />} />
            <Route path="/business" element={<News key="business" pageSize={6} country="in" category="business" newsTitle="Today's Business News" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="entertainment" newsTitle="Today's Entertainment News" />} />
            <Route path="/health" element={<News key="health" pageSize={6} country="in" category="health" newsTitle="Today's Health News" />} />
            <Route path="/science" element={<News key="science" pageSize={6} country="in" category="science" newsTitle="Today's Science News" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country="in" category="sports" newsTitle="Today's Sports News" />} />
            <Route path="/technology" element={<News key="technology" pageSize={6} country="in" category="technology" newsTitle="Today's Tech News" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}

