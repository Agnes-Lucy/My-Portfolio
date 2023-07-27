import React from "react";
import { useState } from "react";
import { NavLink} from "react-router-dom";
// import Portfolio from "../Pages/Portfolio";
// import Home from "../Pages/Home";

const Header = () => {

    const activeStyle = {
        fontWeight: 'bold',
        textDecoration: 'none',
        color: 'red'
    }

    const [portfolio, setPortfolio] = useState('Portfolio')
    const handleClick = () => {
      setPortfolio ()
    }


  return (
    <div>
      <header className="Nav">
        <nav className="Nav-wrapper">
          <NavLink to="/" id="Name">
            AGNES
          </NavLink>
          <div className="Nav-content">
          <NavLink to="about" style={({isActive}) => isActive ? activeStyle : null}>About</NavLink>
          {/* <NavLink style={({isActive}) => isActive ? activeStyle : null} onClick={handleClick}>{portfolio}</NavLink> */}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
