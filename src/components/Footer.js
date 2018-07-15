import React from 'react';

const divStyle = {
    background: 'orange',
    border: '3px solid black',
    textAlign: 'center',
    height : '250px',
    marginTop :'3px',
    color : 'white',
    paddingTop : '10px'
};

const Footer = () => {
  return (
    <div style={divStyle}>
      <div>FOOTER GOES HERE</div>
    </div>
  )
}

export default Footer;