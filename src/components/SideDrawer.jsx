import React from "react";
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
  transform: translateX(${props => (props.open ? "0" : "-100%")});
  transition: transform 0.8s ease-out;
`;

/* const NavOpen = styled(Nav)`
  transform: translateX(0);
`; */

const UL = styled.ul`
  list-style: none;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
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

/* function SideDrawerClosed(props) {
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
} */

function SideDrawer(props) {
  console.log(props);
  return (
    <Nav open={props.open}>
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

/* const SideDrawer = ({ open, sideHandler }) => {
  console.log(open);
  if (open) {
    return <SideDrawerOpen openSide={sideHandler} />;
  }
  return <SideDrawerClosed />;
}; */

/* const SideDrawer = ({ open }) => {
  let drawerClass = "side-drawer";
  if (open) {
    drawerClass = "side-drawer open";
  }
  return (
    <nav className={drawerClass}>
      <ul>
        <li>
          <a href="/">Users</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
      </ul>
    </nav>
  );
}; */

export default SideDrawer;
