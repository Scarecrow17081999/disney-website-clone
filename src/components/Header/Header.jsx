import React from "react";
import "./Header.scss";
// import logo from '../../images/logo.svg'
export default function Header() {
  return (
    <div id="header">
      <img src="/images/logo.svg" alt="" />
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
    </div>
  );
}
