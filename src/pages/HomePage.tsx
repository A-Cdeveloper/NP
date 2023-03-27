import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles";
import Pagination from "../components/UI/Pagination";
import SingleUser from "../components/Users/SingleUser";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchPosts } from "../redux/post/postSlice";
import { fetchUsers, selectUsers } from "../redux/user/userSlice";

const StyledWrapper = styled.div`
  padding: 24px;
`;

let init = true;

const HomePage = () => {
  const dispatch = useAppDispatch();
  const users = useTypedSelector(selectUsers);

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(50);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  useEffect(() => {
    if (init) {
      dispatch(fetchUsers());
      dispatch(fetchPosts());
      init = false;
    }
  }, []);

  return (
    <StyledWrapper>
      <GlobalStyles />

      <h1>Authors List</h1>

      <p>
        <Link to="/blog/new">Add new post</Link>
      </p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((singleuser) => (
            <SingleUser
              email={singleuser.email}
              first_name={singleuser.first_name}
              gender={singleuser.gender}
              id={singleuser.id}
              ip_address={singleuser.ip_address}
              key={singleuser.id}
              last_name={singleuser.last_name}
            />
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        paginate={paginate}
        previousPage={previousPage}
        totalUsers={users.length}
        usersPerPage={usersPerPage}
      />
    </StyledWrapper>
  );
};

export default HomePage;
