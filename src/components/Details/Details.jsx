import Header from "../Header/Header";
import "./Details.scss";
import React from "react";
// import Header from "../Header/Header";
export default function Details() {
  return (
    <>
      <Header />
      <div id="detailsContainer">
        <div id="backgroundImageContainer">
          <img
            src="https://d23.com/app/uploads/2020/05/1180w-600h_050120_disney-video-conference-backgrounds.jpg"
            alt=""
          />
        </div>
        <div id="imageTitle">
          {/* <img
            src="https: //d23.com/app/uploads/2020/05/1180w-600h_050120_disney-video-conference-backgrounds.jpg"
            alt=""
          /> */}
        </div>
        <div id="controlsContainer">
          <div className="play">
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </div>
          <div className="trailer">
            <img src="/images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </div>
          <div className="add">+</div>
          <div className="group">
            <img src="/images/group-icon.png" alt="" />
          </div>
        </div>
        <div id='subTitle'>
          <p>2018 7m Family, Fantasy, Kids, Animation</p>
        </div>
        <div id='description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a ea
            laboriosam? Asperiores ut explicabo cumque corporis iure ratione
            quos delectus placeat assumenda iusto. Placeat libero error fugiat
            vero delectus.
          </p>
        </div>
      </div>
    </>
  );
}
