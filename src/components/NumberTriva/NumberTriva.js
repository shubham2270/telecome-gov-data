import React, { Component } from 'react';
import './numberTriva.css';

class NumberTriva extends Component {
    state = {
        triva: {},
        number: 80,
    }

    _isMounted = false;

        fetchRandomTriva = () => {
            fetch('http://numbersapi.com/random/trivia?json')
            .then(res => res.json())
           
            .then(triva => {
                if(this._isMounted) {
                    this.setState({triva: triva})
                }
            }).catch((err) => {
                document.getElementById('trivaOutput').innerHTML = `${err} : Try again! :)`
            })
            
            
            document.getElementById('inputField').value = "";
        }

        fetchYourTriva = () => {
            fetch(`http://numbersapi.com/${this.state.number}/trivia?json`)
            .then(res => res.json())
            .then(triva => {
              if(this._isMounted) {
                this.setState({triva: triva})
              }
            }).catch((err) => {
                document.getElementById('trivaOutput').innerHTML = `Only number Please, Try again! :)`
            })
        }

        updateNumber = (e) => {
            this.setState({
                number: e.target.value
            })
        }
      

    componentDidMount() {
        this.fetchRandomTriva()
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div>
                <div className='triva_container'>
                    <h1 className='triva_heading'>Random Number Triva!</h1>
                    
                    
                   <div className='triva_input_wrapper'>
                        <input type='number' onChange={this.updateNumber} placeholder={this.state.triva.number} id="inputField"/>
                        <button className='triva_button' onClick={this.fetchYourTriva}>Get Your Triva</button>
                   </div>
                    <div className='triva_text_wrapper'>
                        <div className='triva_text' id="trivaOutput">{this.state.triva.text}</div>
                    </div>
                    <button className='triva_button' onClick={this.fetchRandomTriva}>Get Random Triva</button>
                    
                </div>
             </div>
        )
    }
}

export default NumberTriva;