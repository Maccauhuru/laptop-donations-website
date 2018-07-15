import React from 'react';
import { NavLink } from "react-router-dom";

const divStyle = {
    background: 'black',
    border: '1px solid white',
    textAlign: 'center',
    color:'white'
};

const Navigation = ()=>{
    return(<div style={divStyle}>
    <header>
      <h1>Laptop Donations App</h1>
    </header>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/how-it-works" activeClassName="is-active">
      How It Works
    </NavLink>
    <NavLink to="/faq" activeClassName="is-active">
      Faq
    </NavLink>
      <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
        </div>)
}

export default Navigation;