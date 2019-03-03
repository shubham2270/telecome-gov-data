import React from 'react'

function Header() {
  return (
    <div>
      <div style={headerStyle}><h1>Telecome Data</h1></div>
    </div>
  )
}

//Styling for Header
const headerStyle = {
    display: 'flex',
    width: '100%',
    height: '10vh',
    backgroundColor: '#f4c33d',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center'
}

export default Header;
