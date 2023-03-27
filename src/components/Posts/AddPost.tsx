import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useValidation from "../../hooks/useValidation";
import { addPost } from "../../redux/post/postSlice";
import { selectUsers } from "../../redux/user/userSlice";
import { genRandonString } from "../../utils/helper";

const AddPost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isValid, errorMsg: error, validation } = useValidation();

  const enteredAuthorId = useRef<HTMLSelectElement>(null);
  const enteredTitle = useRef<HTMLTextAreaElement>(null);
  const enteredBody = useRef<HTMLTextAreaElement>(null);

  const users = useTypedSelector(selectUsers);

  const addPostHaandler = (event: React.FormEvent) => {
    event.preventDefault();
    const postAuthorId =
      enteredAuthorId.current && enteredAuthorId.current.value;
    const postTitle = enteredTitle.current && enteredTitle.current.value;
    const postBody = enteredBody.current && enteredBody.current.value;

    if (!isValid) {
      validation(postTitle, postBody);
      return;
    }

    dispatch(
      addPost({
        id: genRandonString(40),
        userId: Number(postAuthorId),
        title: postTitle,
        body: postBody,
        datePosted: new Date().toISOString(),
      }),
    );
    navigate("/");
  };

  return (
    <form onSubmit={addPostHaandler}>
      <label htmlFor="author" id="authorlabel">
        <strong>Post Author:</strong>
      </label>
      <select name="author" ref={enteredAuthorId}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.first_name} {user.first_name}
          </option>
        ))}
      </select>

      <label htmlFor="title" id="titlelabel">
        <strong>Post Title:</strong>
      </label>
      <textarea aria-labelledby="titlelabel" name="title" ref={enteredTitle} />
      <label htmlFor="post_content" id="contentlabel">
        <strong>Post Content:</strong>
      </label>
      <textarea
        aria-labelledby="contentlabel"
        name="post_content"
        ref={enteredBody}
        rows={8}
      />

      {error ? (
        <div style={{ flex: 1 }}>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      ) : null}
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default AddPost;
