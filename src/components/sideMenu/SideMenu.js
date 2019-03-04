import React, { Component } from 'react';
import HamburgerButton from './HamburgerButton/HamburgerButton';
import { Link } from 'react-router-dom';
import './sidemenu.css';

class SideMenu extends Component {
    state = {
        translateX: 'translateX(-300px)',
        status: false,
        toggleArrow: ''
    }

    slideOut = () => {
        this.state.status ? this.setState({translateX: 'translate(-300px)', status: false, toggleArrow: ''}) : this.setState({translateX: 'translate(0px)', status: true, toggleArrow: 'active'})
    }
    
    render() {
        return (
      <div>
        <div className="menu_background sidemenu" 
        style={{transform: this.state.translateX}}>
            <HamburgerButton slideOut={this.slideOut} toggleArrow={this.state.toggleArrow}/>
            
                <Link to="/about">About</Link>
                <Link to="/data">Data</Link>
                <Link to="/data2">Data2</Link>
            
        </div>
      </div>
    )
}
}

export default SideMenu
