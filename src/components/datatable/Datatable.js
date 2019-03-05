import React, { Component } from 'react';
import './datatable.css';

class Datatable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      telecomeData: [],
      isLoaded: false,
      transform: 'translateX(230px)',
      infoStatus: true,
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

  toggleMoreInfo = () => {
    this.state.infoStatus ? this.setState({transform: 'translateX(0px)', infoStatus: false}) : this.setState({transform: 'translateX(230px)', infoStatus: true})
  }

  render() {

    const { year, month, wired, wireless, lakhs } = this.props;
    const { telecomeData, transform } = this.state;

      return (
        <div>
            <div className='wrapper'>
              <div className='card_moreinfo' style={{transform: transform}} onClick={this.toggleMoreInfo}>
                <div className='card__moreinfo__toggleButton'><strong>&lt;</strong></div>
               
                <div className="card__moreinfo__text">
                  <div><strong>Period:</strong> December Month data from 2009 to 2014</div>
                  <hr/><hr/>
                  <div><strong>Data Source:</strong> <a href="https://www.data.gov.in">data.gov.in</a></div>
                  <hr/><hr/>
                  <div><strong>Organization Type:</strong> Central</div>
                  <hr/><hr/>
                  <div><strong>Organization:</strong> Ministry of Communications and Information Technology",
                        Department of Telecommunications (DOT)</div>
                  <hr/><hr/>  
                </div>
              
              </div>
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
