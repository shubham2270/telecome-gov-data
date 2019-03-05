import React from 'react';
import './buttonMenu.css';

const sideMenuButton = (props) => {
    return (
        <div className='menu_button'>{props.btnName} <div></div></div>
    )
}

export default sideMenuButton;