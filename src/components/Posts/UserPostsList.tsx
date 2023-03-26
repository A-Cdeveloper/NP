import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { deletePost, selectPosts } from "../../redux/post/postSlice";

const UserPostsList = ({ id }: { id: number }) => {
  const dispatch = useAppDispatch();
  const posts = useTypedSelector(selectPosts);
  const userPosts = posts.filter((el) => el.userId === id);

  const deletePostHandler = (post_id: string) => {
    dispatch(deletePost(post_id));
  };

  return (
    <tr>
      <td colSpan={5}>
        <div className="postsList">
          {userPosts
            ? userPosts.map((post) => (
                <div className="postItem" key={post.id}>
                  <h3>
                    <Link to={`blog/${post.title}`}>{post.title}</Link>
                  </h3>
                  <AiFillDelete
                    onClick={() => deletePostHandler(post.id)}
                    size={22}
                  />
                </div>
              ))
            : null}
        </div>
      </td>
    </tr>
  );
};

export default UserPostsList;
