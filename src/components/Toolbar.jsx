import React from "react";
import styled from "styled-components";
import DrawerToggleButton from "./DrawerButton";

const Header = styled.header`
  position: fixed;
  width: 100%;
  background: #521751;
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
  color: white;
  text-decoration: none;

  :hover,
  :active {
    color: #fa923f;
  }
`;

const ALogo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

const DivSpacer = styled.div`
  flex: 1;
`;

const DivLogo = styled.div`
  margin-left: 0.5rem;
`;

const DivItems = styled.div``;

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
        <DivSpacer className="spacer" />
        <div className="toolbar_navigation-items">
          <UL>
            <LI>
              <A href="/">Products</A>
            </LI>
            <li>
              <A href="/">Users</A>
            </li>
          </UL>
        </div>
      </Nav>
    </Header>
  );
};

export default Toolbar;
