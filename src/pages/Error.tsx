import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 24px;
  text-align: center;
`;

export const Error = () => (
  <StyledWrapper>
    <h1>Nothing found</h1>
  </StyledWrapper>
);

export default Error;
