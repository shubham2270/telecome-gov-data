import React, { Component } from 'react';
import HamburgerButton from './HamburgerButton/HamburgerButton';
import { Link } from 'react-router-dom';
import './sidemenu.css';
import ButtonMenu from './ButtonMenu/ButtonMenu';




class SideMenu extends Component {
    state = {
        translateX: 'translateX(-400px)',
        status: false,
        toggleArrow: '',
        backgroundColor: 'transparent'
    }

    slideOut = () => {
        this.state.status ? this.setState({translateX: 'translate(-400px)', status: false, toggleArrow: '', backgroundColor: 'transparent'}) 
        : this.setState({translateX: 'translate(0px)', status: true, toggleArrow: 'active', backgroundColor: 'rgb(216, 22, 112)'})
    }

    
    
    render() {
        return (
      <div>
        <div className="menu_background sidemenu" 
        style={{transform: this.state.translateX, backgroundColor: this.state.backgroundColor}}>
            <HamburgerButton slideOut={this.slideOut} toggleArrow={this.state.toggleArrow}/>
            
                <Link to="/data"><ButtonMenu btnName={'Data'} /></Link>
                <Link to="/triva"><ButtonMenu btnName={'Number Trivia!'} alignStyle={{marginLeft: '-25px'}} /></Link>
                <Link to="/about"><ButtonMenu btnName={'About'} alignStyle={{marginLeft: '-45px'}} /></Link>
                <Link to="/data2"><ButtonMenu btnName={'Button 2'} alignStyle={{marginLeft: '-65px'}} /></Link>
                <Link to="/data2"><ButtonMenu btnName={'Button 2'} alignStyle={{marginLeft: '-85px'}} /></Link>
                <Link to="/data2"><ButtonMenu btnName={'Button 2'} alignStyle={{marginLeft: '-105px'}} /></Link>
            
        </div>
      </div>
    )
}
}

export default SideMenu
