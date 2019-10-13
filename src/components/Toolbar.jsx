import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerButton";

const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #282c34;
  height: 56px;
  top: 0;
  left: 0;
`;

const UL = styled.ul`
  text-decoration: none;
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const LI = styled.li`
  padding: 0 0.5rem;
`;

const A = styled.a`
  color: #dadbd5;
  text-decoration: none;

  :hover,
  :active {
    color: #fa923f;
  }
`;

const ALogo = styled.a`
  color: #f51963;
  text-decoration: none;
  font-size: 1.7rem;
  font-family: "Avenir Next";
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

const Spacer = styled.div`
  flex: 1;
`;

const DivLogo = styled.div`
  margin-left: 1.5rem;
`;

const StyledLink = styled(NavLink)`
  display: block;
  color: #f51963;
  text-decoration: none;
  padding: 0 15px 0px 17px;

  :hover,
  :active {
    color: #fa923f;
  }
`;

const Toolbar = ({ drawerClickHandler }) => {
  return (
    <Header className="toolbar">
      <Nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <DivLogo className="toolbar__logo">
          <ALogo href="/">The Logo</ALogo>
        </DivLogo>
        <Spacer className="spacer" />
        <div className="toolbar_navigation-items">
          <UL>
            <LI>
              <StyledLink to="/about">About</StyledLink>
            </LI>
            <li>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
          </UL>
        </div>
      </Nav>
    </Header>
  );
};

export default Toolbar;
