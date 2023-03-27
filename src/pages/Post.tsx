import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles";
import SinglePost from "../components/Posts/SinglePost";

const StyledWrapper = styled.div`
  padding: 24px;
  max-width: 50%;
  margin: auto;
`;

const Post = () => {
  const params = useParams<{ post_id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post_id: string = params.post_id!;

  return (
    <StyledWrapper>
      <GlobalStyles />
      <SinglePost post_id={post_id} />
    </StyledWrapper>
  );
};

export default Post;
