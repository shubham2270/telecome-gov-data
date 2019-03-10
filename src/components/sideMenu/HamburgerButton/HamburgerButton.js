import React from 'react'
import './hamburgerButton.css';



const HamburgerButton = (props) => {
        return ( 
                <button className={`menu-btn ${props.toggleArrow}`} onClick={props.slideOut}>
                    <span></span>
                 </button>
        )
    }  

export default HamburgerButton;