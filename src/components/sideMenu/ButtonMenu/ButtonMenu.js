import React from 'react';
import './buttonMenu.css';

const sideMenuButton = (props) => {
    return (
        <div className='menu_button btn' style={props.alignStyle}>{props.btnName}</div>
    )
}

export default sideMenuButton;