import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Datatable from './components/datatable/Datatable';
import SideMenu from './components/sideMenu/SideMenu';
import About from './components/About/About';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
     const landline_vs_Mobile = 'https://api.data.gov.in/resource/a176cfe8-2f69-4c0a-960d-bb3b16fcb638?api-key=579b464db66ec23bdd000001125b99b03397408164eb5379766559eb&format=json&offset=0';

   
      return (
        <BrowserRouter>
          <div className='main_wrapper'>
              <div className='header'>
                <Header />
              </div>
              <div className='sidemenu'>
                <SideMenu />
              </div>
              <div className='datatable'>
                <Route path="/about" component={About} exact />
                <Route path="/data" render={() => <Datatable 
                year={'Year'} 
                wired={'Wired'} 
                wireless={'Wireless'} 
                apiUrl={landline_vs_Mobile}
                month={'Apr - Mar'}
                lakhs={'(In Lakhs)'}
                />} 
                exact />
              </div>
              <div className='footer'>
                <Footer />
              </div>
          </div>
        </BrowserRouter>
      );
    }
  }


export default App;
