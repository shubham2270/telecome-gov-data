import React, { Component } from 'react';
import Header from './components/header/Header';
import Datatable from './components/datatable/Datatable';
import './App.css';

class App extends Component {
  render() {

    // let { isLoaded, items } = this.state;

    // if (!isLoaded) {
    //   return <div>Loading...</div>
    // } else {}
      return (
        <div className="App">
          <Header />
          <Datatable/>
        </div>
      );
    }
  }


export default App;
