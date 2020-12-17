
import React from "react";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavBarComponents'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1> The Looks</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/looks/new" activeStyle>
            create look
          </NavLink>
          <NavLink to="/looks" activeStyle>
            Looks
          </NavLink>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/products" activeStyle>
            Products
          </NavLink>
      </NavMenu>
        <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
     </Nav>
    </>
  );
};
export default NavBar;
