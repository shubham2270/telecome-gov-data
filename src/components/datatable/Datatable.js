import React, { Component } from 'react';
import './datatable.css';

class Datatable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    let APIUrl = 'https://api.data.gov.in/resource/a176cfe8-2f69-4c0a-960d-bb3b16fcb638?api-key=579b464db66ec23bdd000001125b99b03397408164eb5379766559eb&format=json&offset=0';

    // let APIUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(APIUrl)
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        items: data.records,
        // items: data,
      })
    })
    
  }
  
  render() {
      return (
        <div>
          <div className='wrapper'>
                  <div className='card'>
                    <div className='dataTitleWrapper'>
                    <div className='item year'>Year</div>
                    <div className='inLakhs'>(Apr - Mar)</div>
                  </div>
                    
                   <div className='dataTitleWrapper'>
                      <div className='item'>Wired</div>
                      <div className='inLakhs'>(In Lakhs)</div>
                   </div>
  
                    <div className='dataTitleWrapper'>
                      <div className='item'>Wireless</div>
                      <div className='inLakhs'>(In Lakhs)</div>
                   </div>
        
                  
                   {!this.state.isLoaded? 
                      <>
                        <div className='data-column'></div>
                        <div className='data-column'>
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/fancybox_loading.gif" alt=""></img></div>
                        <div className='data-column'></div>
                      </> : 
                   <>
                    <div className='data-column'>
                            {this.state.items.filter(object => (
                            object.month === 'December'
                            )).map((item) => {
                              return <div key={item._year_ending_31st_march}>{item._year_ending_31st_march}</div>
                            }) }
                    
                          </div>
                            {/* Wired Data */ }
                          <div className='data-column'>
                          {this.state.items.filter(object => (
                            object.month === 'December'
                            )).map((item) => {
                              return <div key={item._year_ending_31st_march}>{Math.round(item.telephones___wireline/100000)}</div>
                            }) }
                          </div>
                    
                          {/*  Wireless Data*/}
                          <div className='data-column'>
                          {this.state.items.filter(object => (
                            object.month === 'December'
                            )).map((item) => {
                              return <div key={item._year_ending_31st_march}>{Math.round(item.telephones___wireless/100000)}</div>
                            }) }
                      </div>
                    </> 
                  
                    }
                  
                    
                </div>
             
          </div>
        </div>
      )
    

   
  }
}

export default Datatable
