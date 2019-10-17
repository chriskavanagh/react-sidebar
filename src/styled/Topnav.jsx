import styled from "styled-components";

export const Styleddiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: gray;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
`;

export const Styledh1 = styled.h1`
  margin-left: 30px;
  font-size: 3rem;
  color: #41061a;

  @media (max-width: 968px) {
    text-align: center;
  }
`;
