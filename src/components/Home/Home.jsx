import React from "react";
import "./Home.scss";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="home-container">
        <ImageSlider />
        <Viewers />
        <Movies />
      </main>
    </>
  );
}
