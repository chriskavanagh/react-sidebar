import React from "react";
import styled from "styled-components";

const Styleddiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  justify-items: center;
  width: 100%;
  border-top: 3px black solid;
  background: #282c34;

  margin-top: 15rem;

  p {
    color: #f51963;
    text-align: center;
  }

  p#address {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <Styleddiv>
      <div>
        <p id="address">Roanoke, VA (540) 494-4652</p>
        <p>&copy;Skunk-Works Web Development 2019</p>
      </div>
    </Styleddiv>
  );
};

export default Footer;
