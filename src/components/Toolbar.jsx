import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "./DrawerButton";

const Styledheader = styled.header`
  position: fixed;
  width: 100%;
  background: #282c34;
  height: 56px;
  top: 0;
  left: 0;
`;

const Styledul = styled.ul`
  text-decoration: none;
  color: white;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const Styledli = styled.li`
  padding: 0 0.5rem;
`;

const Styleda = styled.a`
  color: #f51963;
  text-decoration: none;
  font-size: 1.7rem;
  font-family: "Avenir Next";
`;

const Stylednav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
`;

const Spacer = styled.div`
  flex: 1;
`;

const Styleddiv = styled.div`
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
    <Styledheader>
      <Stylednav>
        <div>
          <DrawerToggleButton click={drawerClickHandler} />
        </div>
        <Styleddiv>
          <Styleda href="/">The Logo</Styleda>
        </Styleddiv>
        <Spacer />
        <div>
          <Styledul>
            <Styledli>
              <StyledLink to="/about">About</StyledLink>
            </Styledli>
            <Styledli>
              <StyledLink to="/contact">Contact</StyledLink>
            </Styledli>
            <Styledli>
              <StyledLink to="/">Home</StyledLink>
            </Styledli>
          </Styledul>
        </div>
      </Stylednav>
    </Styledheader>
  );
};

export default Toolbar;
