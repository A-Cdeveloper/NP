import React, { useState } from "react";
import styled from "styled-components";

import { EditPost } from "../../types/globalTypes";
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";

const StyledWrapper = styled.div`
  padding: 24px;
`;

const EditPost = ({ id, title, body, onEdit }: EditPost) => {
  const [enteredTitle, setEnteredTitle] = useState<string>(title);
  const [enteredBody, setEnteredBody] = useState<string>(body);

  const changeTitleHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEnteredTitle(event.target.value);
  };

  const changeBodyHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  };

  const editPostHaandler = (event: React.FormEvent) => {
    event.preventDefault();
    onEdit({
      id,
      title: enteredTitle,
      body: enteredBody,
    });
  };

  return (
    <StyledWrapper>
      <GlobalStyles />
      <form onSubmit={editPostHaandler}>
        <label htmlFor="title">
          <strong>Post Title:</strong>
        </label>
        <textarea
          name="title"
          onChange={changeTitleHandler}
          value={enteredTitle}
        />
        <label htmlFor="post_content">
          <strong>Post Content:</strong>
        </label>
        <textarea
          name="post_content"
          onChange={changeBodyHandler}
          value={enteredBody}
        />
        <button type="submit">EDIT</button>
      </form>
    </StyledWrapper>
  );
};

export default EditPost;
