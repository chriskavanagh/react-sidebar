import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
`;

const UL = styled.ul`
  list-style: none;
  text-decoration: none;
`;

const A = styled.a`
  text-decoration: none;
`;

const SideDrawer = props => {
  return (
    <Nav className="side-drawer">
      <UL>
        <li>
          <A href="/">Products</A>
        </li>
        <li>
          <A href="/">Users</A>
        </li>
      </UL>
    </Nav>
  );
};

export default SideDrawer;
