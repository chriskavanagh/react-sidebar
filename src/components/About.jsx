import React from "react";
import styled from "styled-components";

const Styledp = styled.p`
  margin: 50px 60px 20px auto;
  font-size: 1.2rem;

  @media (max-width: 968px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Styledli = styled.li`
  color: #fa5738;
  margin-bottom: 20px;
  border-bottom: 1px dotted blue;
  padding-bottom: 10px;
`;

const Styledul = styled.ul`
  list-style: none;
  margin-top: 40px;
  padding: 0px;
`;

const Styledh1 = styled.h1`
  font-size: 3rem;

  @media (max-width: 968px) {
    text-align: center;
    border-bottom: 4px solid black;
    padding-bottom: 5px;
  }
`;

const Styledh2 = styled.h2`
  margin-top: 40px;

  @media (max-width: 968px) {
    text-align: center;
    margin-top: 9rem;
  }
`;

const About = props => {
  return (
    <>
      <div>
        <Styledh1>About Page</Styledh1>
        <Styledp>
          The term avenir is French for “future”. As being the identify implies,
          the household requires inspiration in the geometric style of
          sans-serif typeface created in the twenties that took the circle as
          being a basis, these types of as Erbar and Futura.
        </Styledp>
        <Styledp>
          Frutiger supposed Avenir being a more natural and organic
          interpretation in the geometric design, more even in colour and well
          suited for prolonged text, with particulars recalling a lot more
          standard typefaces these types of given that the two-storey ‘a’ and
          ‘t’ having a curl for the base, and letters such since the ‘o’ which
          have been not specific, fantastic circles but optically corrected.
        </Styledp>
      </div>
      <div>
        <Styledh2>Recent Posts</Styledh2>
        <hr />
        <Styledul>
          <Styledli>Kollektif Typeface</Styledli>
          <Styledli>Noelan Script Font</Styledli>
          <Styledli>Debby Font Family</Styledli>
          <Styledli>Wreath Font Family</Styledli>
          <Styledli>Selima Script Font Free</Styledli>
          <Styledli>Selima Script Font Free</Styledli>
        </Styledul>
      </div>
    </>
  );
};

export default About;
