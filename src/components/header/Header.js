import React from 'react'

function Header({className}) {
  return (
    <div>
      <div style={headerStyle} className='header'><h1>Telecome Data</h1></div>
    </div>
  )
}

//Styling for Header
const headerStyle = {
    display: 'flex',
    width: '100%',
    height: '10vh',
    backgroundColor: '#7317d6',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    gridArea: 'header'
}

export default Header;
