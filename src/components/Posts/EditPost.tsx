import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { EditPost } from "../../types/globalTypes";

const EditPost = ({ id, title, body, onEdit }: EditPost) => {
  const navigate = useNavigate();
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
    navigate("/");
  };

  return (
    <form onSubmit={editPostHaandler}>
      <label htmlFor="title" id="titlelabel">
        <strong>Post Title:</strong>
      </label>
      <textarea
        aria-labelledby="titlelabel"
        name="title"
        onChange={changeTitleHandler}
        value={enteredTitle}
      />
      <label htmlFor="post_content" id="contentlabel">
        <strong>Post Content:</strong>
      </label>
      <textarea
        aria-labelledby="contentlabel"
        name="post_content"
        onChange={changeBodyHandler}
        rows={8}
        value={enteredBody}
      />
      <button id="action" type="submit">
        EDIT
      </button>
    </form>
  );
};

export default EditPost;
