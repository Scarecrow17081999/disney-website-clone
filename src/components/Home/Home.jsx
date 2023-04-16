import React, { useEffect } from "react";
import "./Home.scss";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewers from "../Viewers/Viewers";
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import db from "../../firebase";
export default function Home() {
  useEffect(() => {
   db.collection("movies").onSnapshot((snapshot) => {
    //  snapshot.forEach((doc) => {
    //    console.log(doc.data());
    //  });
    console.log(snapshot);
   });
  // console.log(db);
  }, []);
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
