import React from "react";
//import CloseButton from "./CloseButton";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  transition: transform 0.5s ease-out;
`;

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

const SideDrawer = props => {
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
};

export default SideDrawer;
