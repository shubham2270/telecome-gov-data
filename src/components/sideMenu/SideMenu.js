import React, { Component } from 'react'
import './sidemenu.css';

class SideMenu extends Component {

    slideOut = () => {
        // document.getElementsByClass('menu_background')[0].classlist.add('slide_left');
    }
    
    render() {
        return (
            <div>
        <div className="menu_background sidemenu" onClick={this.slideOut}></div>
      </div>
    )
}
}

export default SideMenu
