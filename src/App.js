import React, { useState } from "react";
// import { Route, Switch } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import "./App.css";

function App() {
  const [sideDrawer, setsideDrawer] = useState(false);

  const clickHandler = e => {
    console.log(sideDrawer);
    setsideDrawer(!sideDrawer);
  };

  const backdropClickHandler = e => {
    setsideDrawer(false);
  };

  let backdrop;

  if (sideDrawer) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={clickHandler} />
      <SideDrawer open={sideDrawer} sideHandler={clickHandler} />
      {backdrop}
      <main style={{ marginTop: "64px" }}>
        <p>This is the page content!</p>
      </main>
    </div>
  );
}

export default App;
