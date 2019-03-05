import React, { Component } from 'react';
import './numberTriva.css';

class NumberTriva extends Component {
    state = {
        triva: {}
    }

    componentDidMount() {
        fetch('http://numbersapi.com/random/trivia?json')
        .then(res => res.json())
        .then(triva => {
            this.setState({
                triva: triva
            })
        })
    }

    render() {
        return (
             <div>
                <div className='triva_container'>
                    <h1>Random Number Triva!</h1>
                    <h1>{this.state.triva.number}</h1>
                    <div className='triva_text'>{this.state.triva.text}</div>
                </div>
             </div>
        )
    }
}

export default NumberTriva;