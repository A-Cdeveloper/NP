import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import SinglePost from "../components/Posts/SinglePost";

const StyledWrapper = styled.div`
  padding: 24px;
  text-align: center;
`;

const Post = () => {
  const params = useParams<{ post_title: string }>();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post_title: string = params.post_title!;

  return (
    <StyledWrapper>
      <SinglePost post_title={post_title} />
    </StyledWrapper>
  );
};

export default Post;
