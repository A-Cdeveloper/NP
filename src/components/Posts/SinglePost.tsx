import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { deletePost, editPost, selectPosts } from "../../redux/post/postSlice";
import { selectUsers } from "../../redux/user/userSlice";
import EditPost from "./EditPost";

const SinglePost = ({ post_id }: { post_id: string }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const posts = useTypedSelector(selectPosts);
  const singlePost = posts.find((post) => post.id === post_id);

  const users = useTypedSelector(selectUsers);
  const author =
    singlePost && users.find((user) => user.id === singlePost.userId);

  const deletePostHandler = (postid: string) => {
    dispatch(deletePost(postid));
    navigate("/");
  };

  const editPostHandler = (editedPostObj: {
    id: string;
    title: string;
    body: string;
  }) => {
    dispatch(editPost(editedPostObj));
  };

  return (
    <div className="siglePost">
      <button onClick={() => navigate("/")} type="button">
        Go back
      </button>
      <br />
      <br />
      <span>
        Published by:
        {author ? ` ${author.first_name} ${author.last_name}` : null}
      </span>

      {singlePost ? (
        <>
          <span style={{ "marginLeft": "8px", display: "inline-block" }}>
            {new Date(singlePost.datePosted).toLocaleDateString("sr-RS")}
          </span>
          <br />
          <br />

          <EditPost
            body={singlePost.body}
            id={singlePost.id}
            onEdit={editPostHandler}
            title={singlePost.title}
          />

          <button
            onClick={() => deletePostHandler(singlePost.id)}
            style={{ "marginTop": "40px", display: "inline-block" }}
            type="button"
          >
            DELETE
          </button>
        </>
      ) : null}
    </div>
  );
};

export default SinglePost;
