import React from "react";
import DrawerToggleButton from "./DrawerButton";
import styled from "styled-components";

const Nav = styled.nav`
  height: 100%;
  background: white;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  z-index: 200;
  max-width: 300px;
  transform: translateX(-100%);
  transition: transform 0.3s ease-out;
  background-color: gray;
`;

const NavOpen = styled(Nav)`
  transform: translateX(0);
`;

const UL = styled.ul`
  list-style: none;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 25px;
`;

const Li = styled.li`
  margin: 0.5rem 0;
`;

const A = styled.a`
  text-decoration: none;
  color: #521751;

  :active,
  :hover {
    color: #fa923f;
  }
`;

function SideDrawerClosed(props) {
  return (
    <Nav className="side-drawer">
      <UL>
        <Li>
          <A href="/">Products</A>
        </Li>
        <Li>
          <A href="/">Users</A>
        </Li>
      </UL>
    </Nav>
  );
}

function SideDrawerOpen({ open }) {
  console.log(open);
  return (
    <NavOpen className="side-drawer">
      <DrawerToggleButton click={open} />
      <UL>
        <Li>
          <A href="/">Products</A>
        </Li>
        <Li>
          <A href="/">Users</A>
        </Li>
      </UL>
    </NavOpen>
  );
}

const SideDrawer = ({ open, sideHandler }) => {
  console.log(open);
  if (open) {
    return <SideDrawerOpen open={sideHandler} />;
  }
  return <SideDrawerClosed />;
};

export default SideDrawer;
