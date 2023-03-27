import React from "react";
import styled from "styled-components";

import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles";
import AddPost from "../components/Posts/AddPost";

const StyledWrapper = styled.div`
  padding: 24px;
  max-width: 50%;
  margin: auto;
`;

const NewPost = () => (
  <StyledWrapper>
    <GlobalStyles />
    <AddPost />
  </StyledWrapper>
);

export default NewPost;
