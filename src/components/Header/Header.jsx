import React from "react";
import "./Header.scss";
import { selectUserName } from "../features/userSlice";
import { selectUserPhoto } from "../features/userSlice";
// import { useSelector } from "react-redux";

export default function Header() {
  // const userName = useSelector(selectUserName);
  // const userPhoto = useSelector(selectUserPhoto);

  return (
    <div id="header">
      <img src="/images/logo.svg" alt="" />
      {!true ? (
        <button>LOGIN</button>
      ) : (
        <>
          <div id="navMenus">
            <a href="#">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="#">
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="#">
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="#">
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="#">
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="#">
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </div>
          <div id="userImage">
            <img src="/images/userImg.jpg" alt="" />
          </div>
        </>
      )}
    </div>
  );
}
