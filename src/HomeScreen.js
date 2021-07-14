import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";

function HomeScreen() {
  return (
    <div className="HomeScreen">
      {/*nav bar*/}
      <Nav />

      {/* Banner */}
      <Banner />
      {/*Row*/}
    </div>
  );
}

export default HomeScreen;
