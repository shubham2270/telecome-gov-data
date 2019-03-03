import React, { Component } from 'react';
import './datatable.css';

class Datatable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      telecomeData: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    let APIUrl = this.props.apiUrl;

    fetch(APIUrl)
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        telecomeData: data.records,
      })
    })
    
  }

  render() {

    const { year, month, wired, wireless, lakhs } = this.props;
    const { telecomeData } = this.state;

      return (
        <div>
          <div className='wrapper'>
              <div className='card'>
                  <div className='data_head_Wrapper'>
                    <div className='data_main_head'>{year}</div>
                    <div className='data_sub_head'>{month}</div>
                  </div>
                    
                   <div className='data_head_Wrapper'>
                      <div className='data_main_head'>{wired}</div>
                      <div className='data_sub_head'>{lakhs}</div>
                   </div>
  
                    <div className='data_head_Wrapper'>
                      <div className='data_main_head'>{wireless}</div>
                      <div className='data_sub_head'>{lakhs}</div>
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
                            {telecomeData.filter(object => (
                            object.month === 'December'
                            )).map((item) => {
                              return <div key={item._year_ending_31st_march}>{item._year_ending_31st_march}</div>
                            }) }
                    
                          </div>
                            {/* Wired Data */ }
                          <div className='data-column'>
                          {telecomeData.filter(object => (
                            object.month === 'December'
                            )).map((item) => {
                              return <div key={item._year_ending_31st_march}>{Math.round(item.telephones___wireline/100000)}</div>
                            }) }
                          </div>
                    
                          {/*  Wireless Data*/}
                          <div className='data-column'>
                          {telecomeData.filter(object => (
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
