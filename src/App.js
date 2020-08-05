import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Wrapper>
      <Header/>
      <Main/>
    </Wrapper>
  
  );
}

export default App;

//app
  //wrapper
    //header - header of the page
    //main 
      //nav
        //searchbox
      //table folder