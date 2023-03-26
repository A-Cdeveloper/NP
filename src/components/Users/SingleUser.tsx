import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteUser } from "../../redux/user/userSlice";
import { User } from "../../types/globalTypes";
import UserPostsList from "../Posts/UserPostsList";

const SingleUser = ({
  id,
  first_name,
  last_name,
  email,
  gender,
  ip_address,
}: User) => {
  const dispatch = useAppDispatch();
  const [showUserPosts, setShowUserPosts] = useState(false);

  const showUserPostsHandler = () => {
    setShowUserPosts(!showUserPosts);
  };

  const deleteUserHandler = (user_id: number) => {
    dispatch(deleteUser(user_id));
  };

  return (
    <>
      <tr key={id} onClick={showUserPostsHandler}>
        <td>
          {first_name} - {id}
        </td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>{gender}</td>
        <td>{ip_address}</td>
        <td style={{ textAlign: "center" }}>
          <AiFillDelete onClick={() => deleteUserHandler(id)} size={22} />
        </td>
      </tr>
      {showUserPosts ? <UserPostsList id={id} /> : null}
    </>
  );
};

export default SingleUser;
