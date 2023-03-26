import React from "react";
import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = React.memo(
  createGlobalStyle`${css`
    * {
      margin: 0;
      box-sizing: border-box;
      padding: 0;
      border: 0;
      font-family: "Montserrat", sans-serif;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
      margin-top: 10px;
      width: 100%;
    }

    th,
    td {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }

    ul {
      list-style: none;
    }

    a,
      color: "red";
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      gap: 10px;
    }

    .pagination .page-number {
      font-size: 14px;
      font-weight: 600;
      color: #00a8ff;
      background: #fff;
      padding: 5px 10px;

      cursor: pointer;
      transition: all 0.5s ease;
    }

    .pagination .page-number.arrow:hover {
      color: #00a8ff;
      background: #fff;
      padding: 5px 10px;
      cursor: pointer;
    }

    .pagination .page-number:hover {
      color: #fff;
      background: #00a8ff;
    }

    .pagination .active {
      font-size: 14px;
      cursor: pointer;
      padding: 5px 10px;
      color: #fff;
      background: #00a8ff;
    }
    .postsList {
      padding: 10px;
    }
    .postItem{
      display:flex;
    }
    .postItem h3 {
      font-size: 14px;
      margin: 0px 0px 15px 0px;
      flex: .9
    }
    .postItem h3 a {
      color:  #F89067;
      cursor:pointer
    }
    .postItem svg {
      fill:  #F89067;
      cursor:pointer
    }

    button{
      display:block;
      padding: 5px 15px;
    }

    form {
      display:flex;
      flex-wrap: wrap;
    }
    input, textarea {
      width: 100%!important;
      border: 1px solid #ccc;
      height: auto;
      display:block;
      margin-bottom: 20px;
      padding: 10px;
      margin-top:4px
    }
  `}`,
);
